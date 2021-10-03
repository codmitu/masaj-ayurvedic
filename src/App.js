import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainPage } from './components/pages/MainPage';
import { Success } from './components/pages/Success';
import React from 'react';

function App() {
  return (
    <div>
      <Router basename="/salon-masaj-denisa">
        {/* <Router > */}
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/success" exact>
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
