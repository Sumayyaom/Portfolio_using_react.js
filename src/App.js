import React from 'react';
import './App.css';
import Objective from './components/Objective';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Objective/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
