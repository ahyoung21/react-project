import React, { Component } from 'react';

class App extends Component {
  state = {
    username: '',
    password: '',
    list: []
  };

  id = 1;
  usernameInput = React.createRef();

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleInsert = e => {
    e.preventDefault();
    const { username, password, list } = this.state;

    this.setState({
      username: '',
      password: '',
      list: list.concat({ id: this.id++, username, password })
    });

    if (!this.usernameInput.current) return; // ref 가 만약에 제대로 설정이 안되었다면 무시
    this.usernameInput.current.focus();
  };

  render() {
    const { username, password, list } = this.state;
    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="username"
            onChange={this.handleChange}
            ref={this.usernameInput}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
        <div>
          {username}은 {password}이다
        </div>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              {item.username}({item.password})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
