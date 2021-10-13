import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Tech from './components/pages/Tech';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about-me" exact component={AboutMe}/>
          <Route path="/tech" exact component={Tech}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        {/* <h1>APP PAGE</h1> */}
      </Router>

    </>
  );
}

export default App;
