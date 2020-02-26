import React, { Component } from "react";
import "./App.css";

import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

class App extends Component {
  id = 1;
  i = 2;

  state = {
    todos: [],
    score: "★",
    maxScore: 5
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

    this.setState({
      score: "★".repeat(this.i++)
    });
  };

  handleDecrease = () => {
    const score = this.state;

    this.setState({
      score: score.subtr(0, score.length - 1)
    });
  };

  render() {
    const type = "SONG";
    const { score, maxScore } = this.state;

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
        <button onClick={score.length < maxScore && this.handleIncrease}>
          +
        </button>
        <button onClick={score.length > 1 && this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default App;
