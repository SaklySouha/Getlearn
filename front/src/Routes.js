import React from 'react';
import { Route, Switch } from 'react-router-dom';



// FREE
import HomePage from './pages/HomePage';

import PageCoursNode from './pages/PageCoursNode';
import PageCoursDev from './pages/PageCoursDev';
import PageFormate from './pages/PageFormate';
import PageContact from './pages/PageContact';
import PageInscri from './pages/PageInscri';
import PageConnex from './pages/PageConnex';








class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/PageCoursNode' component={PageCoursNode} />

        <Route exact path='/PageCoursDev' component={PageCoursDev} />
        <Route exact path='/PageFormate' component={PageFormate} />
        <Route exact path='/PageContact' component={PageContact} />
        <Route exact path='/PageInscri' component={PageInscri} />
        <Route exact path='/PageConnex' component={PageConnex} />





       
       

        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
