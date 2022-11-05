import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ResumePage from './Pages/ResumePage/ResumePage';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={ <LandingPage /> } />
        <Route exact path='/about-me' element={ <AboutPage /> } />
        <Route exact path='/resume' element={ <ResumePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
