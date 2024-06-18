import "./about.scss";

function About() {
    return ( 
      <div className="content-box about-info">
        <h2>About Me</h2>
        <p>
          Hi there! I'm a passionate web developer with intermediate skills in both front-end and back-end technologies.
          With a strong foundation in <span className="highlight">HTML, SCSS, JavaScript, TypeScript</span>, and modern frameworks like
          <span className="highlight">React and Vite</span>.
          I create responsive, user-friendly interfaces. My experience with state management using Zustand ensures efficient
          and scalable applications.
        </p>
        <p>
          On the back-end, I am proficient in <span className="highlight">NodeJS, ExpressJS</span>, and 
          <span className="highlight">Socket.io</span>, allowing me to build robust and real-time server-side applications.
          Additionally, I have hands-on experience with <span className="highlight">Firebase</span>, 
          including Firestore, and Linode for services and hosting,
          ensuring reliable and scalable deployments.
        </p>
      </div>
    );
  }
  
  export default About;
  