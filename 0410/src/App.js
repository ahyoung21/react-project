import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
export default function App() {
  return (
    <BrowserRouter>
      {/* active 클래스가 추가됨 */}
      <NavLink exact to="/">
        home
      </NavLink>
      <br />
      <NavLink to="/about">about</NavLink>
      <br />
      <NavLink to="/users">user</NavLink>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/:param?" component={Users} />
        <Route
          render={() => {
            return <h1>에러페이지입니다</h1>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
