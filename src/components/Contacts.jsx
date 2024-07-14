import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 style={{fontSize:'50px'}}>Contact Me</h2>
      <form>
        <input type='text' placeholder='Enter your name' style={{padding: '15px 400px',marginBottom: '10px', backgroundColor: '#333',fontSize:'20px',fontStyle:'italic'}}/><br/>
        <input type='text' placeholder='Enter your phone number' style={{ padding: '15px 400px',marginBottom: '10px', backgroundColor: '#333',fontSize:'20px',fontStyle:'italic'}}/><br/>
        <input type='text' placeholder='Enter your email' style={{padding: '15px 400px', marginBottom: '10px', marginBottom: '10px',backgroundColor: '#333',fontSize:'20px',fontStyle:'italic' }}/><br/>
        <textarea placeholder='Enter your message if any' rows='6' style={{padding: '15px 400px', marginBottom: '10px',backgroundColor: '#333',fontSize:'20px',fontStyle:'italic'}}/><br/>
        <input type='submit' style={{padding: '15px 475px',backgroundColor:'#8ca8ee',fontSize:'30px' }}/>
      </form>
    </section>
  );
};

export default Contact;
