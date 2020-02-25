import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, onRemove, onStar } = this.props;

    return (
      <div className="TodoList">
        {todos.map((todo) => {
          return <TodoItem todo={todo} onRemove={onRemove} onStar={onStar} />;
        })}
      </div>
    );
  }
}

export default TodoList;
