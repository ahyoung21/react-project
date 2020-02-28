import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const {
      todo,
      // score,
      maxScore,
      onRemove,
      onIncrease,
      onDecrease
    } = this.props;

    return (
      <div className="TodoItem">
        {/* <div className="check">&#10004;</div> */}
        <div className="text">{todo.text}</div>
        <div className="starRating">{todo.score}</div>
        <button
          className="increase"
          onClick={() => todo.score.length < maxScore && onIncrease(todo.score)}
        >
          +
        </button>
        <button
          className="decrease"
          onClick={() => todo.score.length > 1 && onDecrease(todo.score)}
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
