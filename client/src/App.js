import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Route exact path="/" component={Fib} />
    </Router>
  );
};

export default App;
