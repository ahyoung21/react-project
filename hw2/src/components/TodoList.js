import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, maxScore, onRemove, onIncrease, onDecrease } = this.props;

    return (
      <div className="TodoList">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              maxScore={maxScore}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
