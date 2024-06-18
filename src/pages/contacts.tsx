import './contacts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone,} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';


const Contacts = () => {
  return (
    <div className="contacts content-box">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <span >{' '}Email: miroslavpeshev.dev@gmail.com</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <span>{' '}Phone: +447856257524</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
          <span>
          {' '}LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/miroslav-peshev/" target="_blank" rel="noopener noreferrer">
            miroslav-peshev
            </a>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>
          {' '}GitHub:{' '}
            <a href="https://github.com/Afimc" target="_blank" rel="noopener noreferrer">
              Afimc</a>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUpwork} />
          <span>
          {' '} UpWork:{' '}
            <a href="https://www.upwork.com/freelancers/~010374b1e06d7e952d" target="_blank" rel="noopener noreferrer">
              Miroslav Peshev</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
