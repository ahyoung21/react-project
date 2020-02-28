import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: null,
    birthday: ""
  };

  handleLotto = () => {
    axios
      .get("http://askat.me:8000/api/lotto/")
      .then((response) => {
        this.setState({
          data: response.data.join(" ")
        });
      })
      .catch((error) => {
        //get이 실패하거나, .then에서 에러가 나면 실행됨
        console.log(error);
      });
  };

  handleInsert = (e) => {
    const { value } = e.target;
    const { birthday } = this.state;

    this.setState({
      birthday: value
    });
  };

  handleFortune = () => {
    const { birthday } = this.state;

    axios
      .get("http://askat.me:8000/api/fortune/" + birthday)
      .then((response) => {
        this.setState({
          data: response.data
        });
      });
  };

  handleBad = () => {
    axios
      .get("http://askat.me:8000/api/bad")
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((error) => {
        window.alert("Oops!");
      });
  };

  render() {
    const { data, birthday } = this.state;

    return (
      <div>
        {/* promise : 비동기를 동기적으로*/}

        <button onClick={this.handleLotto}>Lotto</button>
        <input
          name="birthday"
          type="data"
          value={birthday}
          onChange={this.handleInsert}
        />

        <button onClick={this.handleFortune}>Fortune</button>
        <button onClick={this.handleBad}>Bad</button>
        <div>{this.state.data}</div>
      </div>
    );
  }
}

export default App;
