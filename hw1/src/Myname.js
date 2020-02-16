import React, { Component } from 'react';

class MyName extends Component {
  render (){
    return (
      <div>
        내 이름은 {this.props.name} 입니다.
      </div>
    )
  }
}

export default MyName;