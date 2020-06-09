import React, { Fragment } from 'react';
import Home from './views/home';
import Login from './views/login';
import Register from './views/register';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalIconfont } from './assets/iconfont/iconfont'
import './assets/style/scss/commom/reset.scss'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalIconfont />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Register}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
