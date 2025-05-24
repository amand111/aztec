import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App; 