import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Tech from './components/pages/Tech';
import ContactTwo from './components/pages/ContactTwo';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about-me" exact component={AboutMe}/>
          <Route path="/tech" exact component={Tech}/>
          <Route path="/contact-me" exact component={ContactTwo}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
