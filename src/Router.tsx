import "./Router.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout} from "./pages/layout";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contacts from "./pages/contacts";


function Router() {
  return (
    <div className="router">
      <BrowserRouter  basename="/portfolio">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
