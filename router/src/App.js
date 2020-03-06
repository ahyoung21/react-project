import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Sub from './Sub';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">메인화면으로</Link>
        </li>
        <li>
          <Link to="/sub">서브화면으로</Link>
        </li>
      </ul>

      {/* <Route path="주소" component={보여주고싶은 컴포넌트}> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sub" component={Sub} />
        <Route path="/profiles" component={Profiles} />
        <Route exact render={() => <div>없는 주소입니다</div>} />
      </Switch>
    </div>
  );
};

export default App;
