import React, { useState } from 'react';
import './project.scss'

function Project({title, desc, extendetProps}:any) {
    const [extendet, setExtendet] = useState(false)
  return ( 
    <>
    {
     !extendet
        ? <div className="project-box" onClick={()=>setExtendet(true)}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
        :<div className="project-box" onClick={()=>setExtendet(false)}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{extendetProps.content}</p>
    </div>
    }
   </>
  );
  }
  
  export default Project;
  