import React, { Component } from 'react';
import produce from 'immer';
import './style.css';

// yarn add immer
class App extends Component {
  id = 2;
  state = {
    input: '',
    todos: [
      {
        id: 1,
        text: '제목1',
        done: false
      },
      {
        id: 2,
        text: '제목2',
        done: false
      }
    ]
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  handleInsert = () => {
    this.setState(
      produce(draft => {
        draft.todos.push({
          id: ++this.id,
          text: this.state.input,
          done: false
        });
        draft.input = '';
      })
    );
  };

  handleToggle = id => {
    this.setState(
      produce(draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      })
    );
  };

  handleRemove = id => {
    this.setState(
      produce(draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      })
    );
  };

  render() {
    return (
      <div>
        <div>
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.handleInsert}>추가</button>
        </div>
        <ul>
          {this.state.todos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none'
              }}
              onClick={() => this.handleToggle(todo.id)}
              // 우클릭
              onContextMenu={e => {
                e.preventDefault();
                this.handleRemove(todo.id);
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
