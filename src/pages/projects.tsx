import React from 'react';
import './projects.scss';
import Project from './shared/project';

function Projects() {
  const desc1 = 'Chess app'
  const desc2 = 'MirkO app'
  const desc3 = 'Health app'
  const chessProps = {
    content: 'Chess content',
    imgs: ['img1','img2','img3'],
    gitLink: 'github.com'
  }
  const mirkoProps = {
    content: 'MirokO content',
    imgs: ['img1','img2','img3'],
    gitLink: 'github.com'
  }
  const healthProps = {
    content: 'Health content',
    imgs: ['img1','img2','img3'],
    gitLink: 'github.com'
  }
 
  return ( 
    <div className="projects">
      <Project title= 'chess' desc={desc1} extendetProps={chessProps}/>
      <Project title= 'Mirko' desc= {desc2} extendetProps={mirkoProps}/>
      <Project title= 'Iro-Health' desc={desc3} extendetProps={healthProps}/>
    </div>
  );
}
  
  export default Projects;
  