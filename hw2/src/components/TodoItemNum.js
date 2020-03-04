import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const {
      todo,
      maxScore,
      onRemove,
      onIncrease,
      onDecrease,
      onToggle
    } = this.props;

    return (
      <div
        className={`TodoItem ${todo.checked && 'active'}`}
        onClick={() => onToggle(todo.id)}
      >
        <div className="check">&#10004;</div>
        <div className="text">{todo.text}</div>
        <div className="starRating">{todo.score.toFixed(1)}</div>
        <button
          className="increase"
          onClick={e => {
            e.stopPropagation();
            todo.score < maxScore && onIncrease(todo.id);
            // console.log('hi');
          }}
        >
          +
        </button>
        <button
          className="decrease"
          onClick={e => {
            e.stopPropagation();
            todo.score > 0.1 && onDecrease(todo.id);
          }}
        >
          -
        </button>
        <div
          className="remove"
          onClick={e => {
            // 이벤트가 부모태그로 전파되는것을 막아주는것.
            e.stopPropagation();
            onRemove(todo.id);
          }}
        >
          X
        </div>
      </div>
    );
  }
}

export default TodoItem;
