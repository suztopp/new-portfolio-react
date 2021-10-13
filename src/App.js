import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/about-me" exact />
          <Route path="/tech" exact />
          <Route path="/contact" exact />
        </Switch>
        <h1>APP PAGE</h1>
      </Router>

    </>
  );
}

export default App;
