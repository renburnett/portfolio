import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/' component={ () => <Landing /> } />
        <Route exact path='/about-me' component={ () => <AboutMe /> } />
        <Route exact path='/projects' component={ () => <Projects /> } />
      </Router>
    </div>
  );
}

export default App;
