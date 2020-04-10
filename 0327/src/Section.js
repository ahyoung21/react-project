import React, { Component } from 'react';
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('section랜더링', this.props.send);
    return (
      <>
        섹션
        {this.props.send.headerInputVal}
      </>
    );
  }
}
export default Section;
