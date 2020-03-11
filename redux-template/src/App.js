import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
// import ColorSquare from './components/ColorSquare';
import ColorSquareContainer from './containers/ColorSquareContainer';
// import ColorList from './components/ColorList';
import ColorListContainer from './containers/ColorListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <ColorSquareContainer />
        <ColorListContainer />
      </div>
    );
  }
}

export default App;
