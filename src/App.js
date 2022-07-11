import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Photos from './pages/photos';
import Blogs from './pages/blogs';
import SignIn from './pages/signin';
import Calendar from './pages/calendar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/photos' component={Photos} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/resume' component={Resume} />
        <Route path='/signin' component={SignIn} />
        <Route path='/calendar' component={Calendar} />
      </Routes>

    </Router>
  );
}

export default App;
