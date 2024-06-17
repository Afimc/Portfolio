import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return ( 
  <div className="layout">
  <nav>
    <h2>Miroslav Peshev</h2>
     <ul>
       <li><Link to="/">About</Link></li>
       <li><Link to="/projects">Projects</Link></li>
       <li><Link to="/skills">Skills</Link></li>
       <li><Link to="/contacts">Contacts</Link></li>
     </ul>
   </nav>
  <div className="outlet"><Outlet /></div>
 </div>
  );
}


