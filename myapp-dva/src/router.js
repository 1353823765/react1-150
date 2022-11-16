import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

import App from './routes/App';
import Film from './routes/Film';
import Filmbox from './routes/Filmbox';
import Filmname from './routes/Filmname';
import Datil from './routes/Datil';
import Login from './routes/Login';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/"  render={()=>
          <App>
          <Switch>
             <Route path="/filmname" render={()=>localStorage.getItem("token")?
          <Redirect to="/login"></Redirect> :<Filmname></Filmname>
           
          }></Route>
          <Route path="/film" component={Film}></Route>
          <Route path="/filmbox" component={Filmbox}></Route>
       
          {/* 动态路由dital */}
          <Route path="/dital/:myid" component={Datil}></Route>
          {/* 匹配搜索到"/",直接跳转到 "/film" */}
          <Redirect from='/' to="/film" ></Redirect>
        
          </Switch>
          </App>
        } />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
