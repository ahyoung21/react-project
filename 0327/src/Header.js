import React, { Component } from 'react';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    console.log(this.props);
    console.log(this.state);
  }
  render() {
    console.log('랜더링', this.state);
    return (
      <div>
        <input
          onChange={e => {
            console.log('체인지이벤트발생');
            this.setState({
              inputVal: e.target.value
            });
          }}
        />
        <button
          onClick={() => {
            console.log('클릭이벤트발생');
            this.props.test(this.state);
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}
export default Header;
