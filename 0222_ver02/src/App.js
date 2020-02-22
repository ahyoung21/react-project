import React, { Component } from "react";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div>
        <h1>hellow</h1>
        <Button text="로그인버튼" />
        <br />
        <Button text="회원가입버튼" />
      </div>
    );
  }
}

export default App;
