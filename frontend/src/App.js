import React from 'react';
import 'antd/dist/antd.css';
import {Route, Switch} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RankPage from './pages/RankPage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/rank' component={RankPage}/>
      <Route exact path='/' component={IndexPage} />
    </Switch>
    
  );
};

export default App;