import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Resume from './pages/Resume';
import './App.css';
require('dotenv').config(); //use to access env variables for auth tokens

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/' component={ () => <Landing /> } />
        <Route exact path='/about-me' component={ () => <AboutMe /> } />
        <Route exact path='/projects' component={ () => <Projects /> } />
        <Route exact path='/resume' component={ () => <Resume /> } />
      </Router>
    </div>
  );
}

export default App;
