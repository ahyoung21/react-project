import React, { Component } from 'react';

class Counter extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onCreate(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <input
            type="text"
            placeholder="전화번호"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
          />
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
}

export default Counter;
