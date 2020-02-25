import React, { Component } from "react";
import "./CreateForm.css";

class CreateForm extends Component {
  state = {
    input: ""
  };

  // input의 value값을 가져온뒤
  // 변화할때마다 input에 value값을 넣어줌
  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      input: value
    });
  };

  // 부모컴포넌트 App에서 받아온 props onInsert를 사용해서 text에 현재 input값을 받아온 뒤 배열로 뱉어냄
  // 그다음 input값 다시 비워줌
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onInsert(this.state.input);
    this.setState({
      input: ""
    });
  };
  render() {
    const { input } = this.state;

    return (
      <div className="CreateForm">
        {/* 폼으로 보낼 때 handleSubmit 함수 실행 */}
        <form className="form_container" onSubmit={this.handleSubmit}>
          <input
            placeholder={"add a(n) " + this.props.type}
            value={input}
            onChange={this.handleChange}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
