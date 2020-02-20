import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { todo, onToggle, onRemove } = this.props;

    return (
      <div
        // "" = `` 같음 ``는 안에 변수를 넣어주고 싶을 때 쓰는것
        className={`TodoItem ${todo.checked && "active"}`}
        onClick={() => onToggle(todo.id)}
      >
        <div className="check">&#10004;</div>
        <div
          className="remove"
          onClick={(e) => {
            // 이벤트가 부모태그로 전파되는것을 막아주는것.
            e.stopPropagation();
            onRemove(todo.id);
          }}
        >
          [remove]
        </div>
        <div className="text">{todo.text}</div>
      </div>
    );
  }
}

export default TodoItem;
