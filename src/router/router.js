import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Task from '../Components/Task';
import ShowTask from '../Components/ShowTasks';
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>        
        <Route path="/" component={Task}  />
        <Route path="/services" component={ShowTask} />
      </Switch>     
    </div>
  </BrowserRouter>
);

export default AppRouter;