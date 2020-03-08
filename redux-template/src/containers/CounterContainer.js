// 컨테이너 컴포넌트 = store와 커넥트하는 컴포넌트

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/modules/counter';
import Counter from '../components/Counter';

// import * as CounterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
  render() {
    const { number, color, increment, decrement } = this.props;

    return (
      <Counter
        color={color}
        number={number}
        increment={increment}
        decrement={decrement}
      />
    );
  }
}

// store에서 관리하는 state를 가져오는 메소드
const mapStateToProps = state => ({
  number: state.counter.number,
  color: state.counter.color
});

const mapDispatchToProps = dispatch => ({
  increment: number => dispatch(increment(number)),
  decrement: number => dispatch(decrement(number))
});

// const mapDispatchToProps = {
//   increment,
//   decrement
// }

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
