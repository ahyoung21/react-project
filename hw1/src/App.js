import React, { Component } from "react";

class App extends Component {
  state = {
    id: "",
    password: "",
    list: []
  };

  id = 1;
  idInput = null;

  handleChange = (e) => {
    const { name, value } = e.target;
    const { length } = this.state.password.length;

    this.setState({
      [name]: value,
      [length]: this.state.length
    });
  };

  handleInsert = (e) => {
    e.preventDefault();
    const { id, password, list } = this.state;
    this.setState({
      id: "",
      password: "",
      list: list.concat({ id: this.id, id, password })
    });

    this.id += 1;

    if (!this.idInput) return;
    this.idInput.focus();
  };

  // isSafe = () => {
  //   const { id, password } = this.state;

  //   if (password.includes(id)) return "true";
  //   if (password.length < 6) return "true";
  // };

  render() {
    const { id, password, list } = this.state;

    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input
            type="text"
            name="id"
            value={id}
            placeholder="id"
            onChange={this.handleChange}
            ref={(ref) => {
              this.idInput = ref;
            }}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <button disabled={password.length < 6 || password.includes(id)}>
            submit
          </button>
        </form>
        <div>
          {id}({password})
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.id}({item.password})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
