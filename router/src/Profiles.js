import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h1>사용자 리스트</h1>
      <ul>
        <li>
          <Link to="/profiles/kim">kim</Link>
        </li>
        <li>
          <Link to="/profiles/yoo">yoo</Link>
        </li>
      </ul>
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
