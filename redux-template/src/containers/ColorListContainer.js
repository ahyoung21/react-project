import React, { Component } from 'react';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import ColorList from '../components/ColorList';
import * as colorListActions from '../store/modules/colorList';
import * as counterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class ColorListContainer extends Component {
  render() {
    const { input, list, colorListActions, counterActions } = this.props;

    return (
      <ColorList
        input={input}
        list={list}
        colorListActions={colorListActions}
        counterActions={counterActions}
      />
    );
  }
}

const mapStateToProps = ({ colorList: { input, list } }) => ({
  input,
  list
});

const mapDispatchToProps = dispatch => ({
  ColorListActions: bindActionCreators(colorListActions, dispatch),
  CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorListContainer);
