import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerInputVal: '' //여기추가
    };
  }
  render() {
    console.log('TodoApp 랜더링', this.state);
    return (
      <div style={{ border: '1px solid black', marginBottom: '100px' }}>
        <h1>투두앱</h1>
        <Header
          test={arg => {
            alert('투두앱의 값입니다');
            console.log('투두앱컴포넌트', arg);
            this.setState({
              //여기서추가
              headerInputVal: arg.inputVal
            });
          }}
        ></Header>
        <Section send={this.state}></Section>
        <Footer></Footer>
      </div>
    );
  }
}
export default TodoApp;
