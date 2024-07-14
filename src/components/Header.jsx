import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 style={{textAlign:'left'}}>My Portfolio</h1>
      <nav style={{fontSize:'25px'}}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
