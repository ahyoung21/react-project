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

// 스토어의 액션을 dispatch해서 관리하는 상태값을 변화시킬 수 있는 함수를 mapDispatchToProps를 통해서 받아올 수 있다
const mapDispatchToProps = dispatch => ({
  increment: number => dispatch(increment(number)),
  decrement: number => dispatch(decrement(number))
});

// 사용할때는 CounterActions.increment, CounterActions.decrement
// const mapDispatchToProps = dispatch => ({
//   CounterActions: bindActionCreators(counterActions, dispatch)
// });

// 아래 두개는 그냥 평소처럼 똑같이 사용
// 1.
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// 2.
// const mapDispatchToProps = {
//   increment,
//   decrement
// }

// react-redux 라이브러리가 제공해주는 connect 함수는 스토어와 컨테이너 컴포넌트를 연결해줌
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
