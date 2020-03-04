import React, { Component } from 'react';
import './TodoList.css';
// import TodoItem from './TodoItem';
import TodoItemNum from './TodoItemNum';

class TodoList extends Component {
  render() {
    const {
      todos,
      maxScore,
      onRemove,
      onIncrease,
      onDecrease,
      onToggle
    } = this.props;

    return (
      <div className="TodoList">
        {todos.map(todo => {
          return (
            <TodoItemNum
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              maxScore={maxScore}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
