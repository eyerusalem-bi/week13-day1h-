import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/vegetables/Index';
import Show from './components/vegetables/Show';
import New from './components/vegetables/New';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/vegetables" component={Index} />
          <Route path="/vegetables/new" component={New} />
          <Route path="/vegetables/:id" component={Show} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;




