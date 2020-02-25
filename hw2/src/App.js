import React, { Component } from "react";
import "./App.css";

import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

class App extends Component {
  id = 1;
  i = 1;

  state = {
    todos: [],
    score: ""
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
  // todos배열에서 현재 id와 같은 배열을 제외한 나머지를 리턴하여 todos배열에 넣음
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
    });
  };

  handleIncrease = () => {
    const score = this.state;
    const maxScore = 5;

    this.setState({
      score: score.length < maxScore && "★".repeat(this.i++)
    });
  };

  handleDecrease = () => {
    const score = this.state;
    const maxScore = 5;

    this.setState({
      score: "★".repeat(this.i--)
    });
  };

  render() {
    const type = "SONG";

    return (
      <div className="App">
        <h3>TODO LIST</h3>
        <CreateForm onInsert={this.handleInsert} type={type} />
        <TodoList
          todos={this.state.todos}
          onRemove={this.handleRemove}
          onStar={this.handleIncrease}
        />
        <div>{this.state.score}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default App;
