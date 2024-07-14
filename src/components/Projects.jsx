import React from 'react';

const Projects = () => {
  return (
    <section id="projects" style={{backgroundColor:'white',marginBottom:'5px', marginTop:'5px'}}>
      <div style={{ display:'flex',padding:'10px',gap:'20px',height:'400px'}}>
        <div style={{flex:'1',paddingTop:'20px', backgroundColor:'#333',}}>
          <h2 style={{textAlign:'center',fontSize:'40px'}}>Education</h2><br/>
          <ul style={{listStyleType:'square',textAlign:'left',fontSize:'20px'}}>
            <li>2023 - MCA from APJ Abdul Kalam Technological University</li>
            <li>2020 - BCA from Cherpulassery College of Science and Technology</li>
          </ul>
        </div>
        <div style={{flex:'1',paddingTop:'20px',backgroundColor:'#333', textAlign:'center'}}>
        <h2 style={{textAlign:'center',fontSize:'40px'}}>Skills</h2><br/>
          <ul style={{listStyleType:'square',textAlign:'left',fontSize:'20px'}}>
            <li>Web development</li>
            <li>Tutoring</li>
            <li>Coding</li>
            <li>Debugging</li>
          </ul>
        </div>
        <div style={{flex:'1',paddingTop:'20px',backgroundColor:'#333', textAlign:'center'}}>
        <h2 style={{textAlign:'center',fontSize:'40px'}}>Projects</h2><br/>
          <ul style={{listStyleType:'square',textAlign:'left',fontSize:'20px'}}>
            <li>Real-Time Object Detection For Visually Impaired People</li>
            <li>Personality Prediction Using Twitter Data For Recruitment Purposes</li>
            <li>Travel And Tourism Comparison Website</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
