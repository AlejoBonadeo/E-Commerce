import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ListProducts from '../components/ListProducts'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/Products" component={ListProducts}/>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
