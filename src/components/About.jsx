import React from 'react';
import myImage from '../assets/images/image1.jpg';


const About = () => {
  return (
    <section id="about" style={{height:'500px',padding:'50px'}} >
      <div style={{ display:'flex', justifyContent:'space-between'}}>
      <div style={{ flex:'1',paddingTop: '100px', textAlign: 'center',fontSize: '30px' }}>
        <h4>Hello, My name is</h4>
        <h1>Fathimath Sumayya O</h1>
        <h4>I'm an assistant professor</h4>
      </div>
      <div style={{flex:'1',paddingTop:'100px', marginRight:'50px'}}>
        <img src={myImage} style={{ textAlign: 'right',height: '50%', width: '50%',borderRadius: '75%', objectFit: 'cover'}}/>
      </div>
      </div>
    </section>
  );
};

export default About;
