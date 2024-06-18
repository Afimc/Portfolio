import "./skills.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faCss3Alt, } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons/faNode";






function Skills() {
  return (
    <div className="skills">
      <div className="skill-box front-end-skills">
        Front-end
        <div className="hidden-skills"><FontAwesomeIcon icon={faHtml5} /> HTML</div>
        <div className="hidden-skills"><FontAwesomeIcon icon={faCss3} /> SCC</div>
        <div className="hidden-skills"><FontAwesomeIcon icon={faCss3Alt} /> SCSS</div>
        <div className="hidden-skills"><FontAwesomeIcon icon={faJs} />JavaScript</div>
        <div className="hidden-skills">TypeScript</div>
        <div className="hidden-skills"><FontAwesomeIcon icon={faReact}/>React</div>
        <div className="hidden-skills">Vite</div>
        <div className="hidden-skills"> Zustand</div>
      </div>
      <div className="skill-box back-end-skills">
        Back-end
        <div className="hidden-skills"><FontAwesomeIcon icon={faNode}/>Node.js</div>
        <div className="hidden-skills">Express</div>
        <div className="hidden-skills">Socket.io </div>
        <div className="hidden-skills">Cors</div>
      </div>
      <div className="skill-box hosting-skills">
        Services & Hosting
        <div className="hidden-skills">Firebase </div>
        <div className="hidden-skills">Linode</div>
      </div>
    </div>
  );
}

export default Skills;
