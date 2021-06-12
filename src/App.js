import React, { useState } from 'react';
import NavMenu from './components/NavMenu/NavMenu.js';
import About from '/Users/l/my-react-website/src/components/NavMenu/About.js';
import Contact from './/components/NavMenu/Contact';
import Projects from '/Users/l/my-react-website/src/components/NavMenu/Projects.js';
import Home from './components/NavMenu/Home';
import Blog from './components/NavMenu/Blog';
import Resume from './components/NavMenu/Resume';
import Dropdown from './components/NavMenu/Dropdown';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hamburger from './components/Hamburger/Hamburger';
import Logo from './components/Logo/Logo';
import GlobalStyle from './globalStyles.js';
import Combining from './components/pages/Combining.js';
import LearningCoding from './components/pages/LearningCoding.js';
import Schedule from './components/pages/Schedule.js';
import Drumkit from './components/Projects/Drumkit.js';


function App() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <Router>
      <div>
          <GlobalStyle />
          <Logo />
          <Hamburger toggle={toggle} />
          <Dropdown open={open} toggle={toggle} />
          <NavMenu />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/blog'>
                <Blog />
              </Route>
              <Route exact path='/projects'>
                <Projects />
              </Route>
              <Route exact path='/resume'>
                <Resume />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/combining'>
                <Combining />
              </Route>
              <Route exact path='/learningcoding'>
                <LearningCoding />
              </Route>
              <Route exact path='/schedule'>
                <Schedule />
              </Route>
            </Switch>
      </div>
    </Router>
  );
}


export default App;

