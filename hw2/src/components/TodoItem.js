import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const {
      todo,
      maxScore,
      onRemove,
      onIncrease,
      onDecrease,
      score
    } = this.props;

    return (
      <div className="TodoItem">
        <div className="text">{todo.text}</div>
        <div className="starRating">{"★".repeat(todo.score)}</div>
        <button
          className="increase"
          onClick={() => todo.score < maxScore && onIncrease(todo.id)}
        >
          +
        </button>
        <button
          className="decrease"
          onClick={() => todo.score > 1 && onDecrease(todo.id)}
        >
          -
        </button>
        <div
          className="remove"
          onClick={(e) => {
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
