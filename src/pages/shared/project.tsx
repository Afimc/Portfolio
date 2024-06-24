
import './project.scss'

function Project({ props, isExtended, setExtendedIndex }: any) {
    
    
  return ( 
    <>
    {
     !isExtended
        ? <div className="project-box" onClick={setExtendedIndex}>
            <h1>{props.title}</h1>
            <p>{props.info}</p>
        </div>
        :<div className="project-box"  onClick={setExtendedIndex} >
        <h1>{props.title}</h1>
        <p>{props.extendetDisc}</p>
        <div className="imgs">
          {
            props.img.map((img:string,i:number)=>{
              return <img src={img} key={i}></img>
            })
          }
        </div>
        
    </div>
    }
   </>
  );
  }
  
  export default Project;
  