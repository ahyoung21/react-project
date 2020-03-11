import React, { Component } from 'react';

// 컨테이너 컴포넌트를 만들 땐, react-redux 안에 들어있는 connect라는 함수를 사용
import { connect } from 'react-redux';
import Paletee from '../components/Palette';
import { changeColor } from '../store/modules/counter';

class PaletteContainer extends Component {
  handleSelect = color => {
    const { changeColor } = this.props;

    console.log('what');
    changeColor(color);
  };

  render() {
    const { color } = this.props;

    return <Paletee onSelect={this.handleSelect} selected={color} />;
  }
}

// props로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  color: state.counter.color
});

// props로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);
