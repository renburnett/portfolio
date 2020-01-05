import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CONSTANTS from './constants';
require('dotenv').config();

const apolloClient = new ApolloClient({
  uri: CONSTANTS.GITHUB_API_ENDPOINT
})

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path='/' component={ () => <Landing /> } />
          <Route exact path='/about-me' component={ () => <AboutMe /> } />
          <Route exact path='/projects' component={ () => <Projects /> } />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
