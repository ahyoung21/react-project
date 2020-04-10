import React, { Component } from 'react';
class Users extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.param);
  }
  render(props) {
    return (
      <div>
        <h1>Users</h1>

        <br />
        {this.props.match.params.param}
      </div>
    );
  }
}
export default Users;
