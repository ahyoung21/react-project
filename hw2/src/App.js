import React, { Component } from "react";
import "./App.css";

import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

class App extends Component {
  id = 1;
  score = "★";

  state = {
    todos: []
  };

  // 인자값으로 text를 받고
  // todos 배열을 가져온 뒤 값이 변화할 때마다
  // todos에 새로운 배열을 추가함.
  handleInsert = (text) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.concat({
        id: this.id++,
        text,
        checked: false,
        score: this.score++
      })
    });
  };

  // 인자값으로 id를 받고
  // todos배열에 map 메소드를 사용하여 돌면서
  // 만약 현재 id값과 배열의 id값이 같으면
  // 스프레드 연산자 사용하여 배열을 한번 복사한뒤 체크값을 반대로 바꿔줌
  // 아니면 그냥 리턴함
  handleToggle = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }
        return todo;
      })
    });
  };

  // 인자값으로 id를 받고
  // todos배열에서 현재 id와 같은 배열을 제외한 나머지를 리턴하여 todos배열에 넣음
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
    });
  };

  render() {
    const type = "SONG";
    const maxScore = 5;

    return (
      <div className="App">
        <h3>TODO LIST</h3>
        <CreateForm onInsert={this.handleInsert} type={type} />
        <TodoList
          onToggle={this.handleToggle}
          todos={this.state.todos}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
