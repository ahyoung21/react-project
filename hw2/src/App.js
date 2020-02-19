import React, { Component } from "react";

class App extends Component {
  state = {
    username: "",
    password: "",
    list: []
  };
  id = 1;

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleInsert = (e) => {
    e.preventDefault();
    const { username, password, list } = this.state;

    this.setState({
      username: "",
      password: "",
      list: list.concat({ id: this.id++, username, password })
    });
  };

  handleRemove = (id) => {
    const { list } = this.state;

    this.setState({
      list: list.filter((e) => e.id !== id)
    });
  };

  render() {
    const { username, password, list } = this.state;

    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>

        <div>
          {username}의 비밀번호는 {password}이다.
        </div>

        <ul>
          {list.map((e) => (
            <li key={this.id}>
              {e.username}({e.password})
              <button
                onClick={() => {
                  this.handleRemove(e.id);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
