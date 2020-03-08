import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    const { number, color, increment, decrement } = this.props;

    return (
      <div className="Counter">
        <h1 style={{ color }}>{number}</h1>
        <div className="btn-wrapper">
          <button onClick={() => increment(1)}>+</button>
          <button onClick={() => decrement(1)}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
