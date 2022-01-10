import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
//import DirectMessage from '@pages/DirectMessage';

// import LogIn from '@pages/LogIn';
// import SignUp from '@pages/SignUp';
//import Channel from '@pages/Channel';
// 페이지들은 무조건 이렇게 코드스플리팅 처리
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App: FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace" component={Workspace} />
    </Switch>
  );
};

export default App;
