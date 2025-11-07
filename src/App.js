// src/App.js
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Project from "./components/Project";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import February2 from "./components/February2";
import February3 from "./components/February3";
import February7 from "./components/February7";
import February22025 from "./components/february22025";
import June22025 from "./components/june22025";
import June42025 from "./components/june42025";
import June52025 from "./components/june52025";
import June32025 from "./components/june32025";
import March25025 from "./components/march25025";
import March72025 from "./components/march72025";
import March272025 from "./components/march272025";

import AboutMe from "./components/AboutMe";
import PortSection from "./components/PortSection";
import James from "./components/James";
import Links from "./components/Links";

import frank from './pictures/frank.jpg';
import linked from './pictures/in.png';
import blue from './pictures/frost.jpg';
import git from './pictures/octocat_fluid.png';
import start from './pictures/start.jpg';
import nyscda from './pictures/download.png';
import ohm from './pictures/ohm.png';

import './App.css';

// ---------- styles ----------
const blogContents = {
  flex: '3',
  border: "2px solid blue",
  borderImage: `url(${blue}) 50 fill / 20px / 10px round`,
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  color: 'lightblue'
};

const divStyle = {
  border: "2px dotted beige",
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: '#331e05',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: "row",
  fontFamily: 'bazooka',
  textAlign: 'center'
};

const linkDivStyle = {
  border: "2px dotted black",
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: '#331e05',
  justifyContent: 'center',
  fontFamily: 'bazooka',
  textAlign: "center"
};

const divStyle2 = {
  flex: "1",
  border: "2px dotted beige",
  maxWidth: '425px',
  padding: "3px",
  margin: '10px'
};

const blogMenu = {
  whiteSpace: 'pre-wrap',
  textAlign: 'left'
};

// ---------- helpers ----------
const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');
const BLOG_ANCHOR = slug('Blogs about my web developement career');
const FREELANCE_ANCHOR = slug('Freelance Web Pages');

const freeLance = {
  msg: 'I have run my own business selling websites. I have been developing for clients a few years now. I get paid by consultation. They index very well on the google search engine.',
  link: FREELANCE_ANCHOR
};

const bootCamp = {
  msg: 'I am fluent in Javascript, HTML, CSS, JQuery, SQL, PHP, Node.JS, React, GitHub, Java, Linux, Ubuntu, Nginx, and Wireshark. I deploy my sites with Digital Ocean. I am patient, understanding, logical, and level headed.'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        { title: 'Yoga Empire', url: "http://www.yogaempire.yoga/" },
        { title: 'Frank Dimodica Art', url: "http://www.frankdimodicaart.com/" }
      ]
    };
  }

  render() {
    console.log('App.render() fired'); // sanity check

    return (
      <div className="App" style={{ color: '#111', background: '#f5f5f5', minHeight: '100vh' }}>
  
        <James />

        {/* Top section (links, about, buttons) */}
        <div style={divStyle} className="App">
          <div style={linkDivStyle}>
            <Links webSiteName="GitHub" image={git} url="https://github.com/JamesMedina7787" /><br />
            <Links webSiteName="LinkedIn" image={linked} url="https://www.linkedin.com/in/james-medina-766170161/" />
          </div>

          <div style={blogContents}>
            <AboutMe message={bootCamp.msg} />
          </div>

          <PortSection style={divStyle2} sectionName="Full Stack Developer" />

          <div style={linkDivStyle}>
            {/* Use slug-safe anchors */}
            <Links webSiteName="Blog" image={start} url={`#${BLOG_ANCHOR}`} /><br />
            <Links webSiteName="Freelance" image={nyscda} url={`#${FREELANCE_ANCHOR}`} />
          </div>

          <div style={blogContents}>
            <AboutMe message={freeLance.msg} />
          </div>
        </div>

        {/* Freelance section */}
        <section id={freeLance.link}>
          <div style={divStyle}>
            <PortSection style={divStyle2} sectionName="Freelance Work Experience" />

            <div style={divStyle2}>
              <Project webSiteName="Frank Dimodica Art" image={frank} url="https://frankdimodicaart.com/" />
            </div>

            <div style={divStyle2}>
              <Project webSiteName="Yoga Empire" image={ohm} url="https://yogaempire.yoga/" />
            </div>
          </div>
        </section>

        {/* Blog + Routes */}
        <section id={BLOG_ANCHOR}>
          <div style={blogMenu}>
            <Navigation />
            <Switch>
              {/* Guaranteed visible root route so the page is never blank */}
              <Route
                path="/"
                exact
        
              />

              {/* Your pages */}
              <Route path="/home" component={Home} />
              <Route path="/February2" component={February2} />
              <Route path="/February3" component={February3} />
              <Route path="/February7" component={February7} />
              <Route path="/february22025" component={February22025} />
              <Route path="/june22025" component={June22025} />
              <Route path="/june32025" component={June32025} />
              <Route path="/march25025" component={March25025} />
              <Route path="/march72025" component={March72025} />
              <Route path="/march272025" component={March272025} />
              <Route path="/june42025" component={June42025} />
              <Route path="/june52025" component={June52025} />

              {/* Catch-all */}
              <Route component={Error} />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
