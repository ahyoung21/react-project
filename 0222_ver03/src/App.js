import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: null
  };

  handleClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        data: response.data
      });
    });
  };

  handleAsyncClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.error(e);
    }
  };

  handlePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(1);
        resolve();
      }, 1000);
    });
  };

  handleAsync = async () => {
    await this.handlePromise();
    console.log(2);
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        {/* promise : 비동기를 동기적으로*/}

        <button
          onClick={() => {
            this.handlePromise().then(() => {
              console.log(2);
            });
          }}
        >
          click
        </button>

        <button onClick={this.handleAsync}>async click</button>
        <br />

        <button onClick={this.handleClick}>데이터 불러오기</button>
        <button onClick={this.handleAsyncClick}>async로 데이터 불러오기</button>
        <ul>
          {data &&
            data.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default App;
