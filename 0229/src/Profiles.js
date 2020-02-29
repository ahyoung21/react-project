import React from "react";
import Profile from "./Profile";
import { Route, Link } from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h1>유저네임 리스트</h1>
      <ul>
        <li>
          <Link to="/profiles/kim">kim</Link>
        </li>
        <li>
          <Link to="/profiles/son">son</Link>
        </li>
      </ul>
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
