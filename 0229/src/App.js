import React from "react";
import Main from "./Main";
import Sub from "./Sub";
import { Switch, Route, Link } from "react-router-dom";
import Profiles from "./Profiles";

const App = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">main으로</Link>
        </li>
        <li>
          <Link to="/sub">sub으로</Link>
        </li>
        <li>
          <Link to="/profiles">profile으로</Link>
        </li>
      </ul>
      <Switch>
        <Route exact component={Main} path="/" />
        <Route component={Sub} path="/sub" />
        <Route component={Profiles} path="/profiles" />
        <Route render={() => <div>404 not found</div>} />
      </Switch>
    </div>
  );
};

export default App;
