import React, { Component } from 'react';
import Project from "./components/Project"
import frank from './pictures/frank.jpg'
import joke from './pictures/joke.png'
import chakras from './pictures/chakras.jpg'
import james from './pictures/james.gif'
import xsa from './pictures/xsa.gif'
import linked from './pictures/in.png'
import git from './pictures/octocat_fluid.png'
import start from './pictures/start.jpg'
import scope from './pictures/scope.png'
import {BrowserRouter, Route, Switch, browserHistory} from "react-router-dom";
import Error from "./components/Error"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import February2 from "./components/February2"
import February3 from "./components/February3"
import February7 from "./components/February7"
import February20 from "./components/February20"
import March2 from "./components/March2"
import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import PortSection from "./components/PortSection"
import James from "./components/James"
import {Link} from "react-router-dom";
import Routes from "./components/Routes"
import Links from "./components/Links"
import {NavLink} from 'react-router-dom'
import nyscda from './pictures/download.png'
import Scroll from 'react-scrollable-anchor'
import './App.css';

const siteDescription= {
  flex:'3',
  border:"2px dotted silver",
  padding: "10px",
  margin: '30px',
  fontSize: '2.38em',
  color:'lightblue'
}

const divStyle= {
  border:"2px dotted black",
  display:"flex",
  flexWrap:"wrap",
  backgroundColor: '#331e05',
  justifyContent:'space-between',
  alignItems: 'center',
  flexDirection:"row",
  fontFamily: 'bazooka',
  textAlign:'center',
  alignItems:'center',
  border:"2px dotted beige"
}
const linkDivStyle= {
  border:"2px dotted black",
  display:"flex",
  flexWrap:"wrap",
  backgroundColor: '#331e05',
  justifyContent:'center',
  fontFamily: 'bazooka',
  textAlign:"center",
  textAlign:'center',

}
const divStyle2= {
  flex:"1",
  border:"2px dotted beige",
  maxWidth:'425px',
  padding: "3px",
  margin: '10px'

}
const blogStyle= {
  display: 'flex',
  border:"2px dotted beige",
  color:'#331e05',
  backgroundColor: 'beige',
  padding: "3px",
  margin: '10px',
  alignItems: 'center',
  flexDirection:"row",
  id:"Blog",
  textAlign:'center'
}
const blogContent= {
  flex:'3',
  border:"2px dotted beige",
  color:'#331e05',
  backgroundColor: 'beige',
  padding: "3px",
  margin: '10px',
  textAlign:'center',
  alignItems:'center',
  blog: 'Blogs about my web developement career'
}
const blogMenu={
  whiteSpace:'pre-wrap',
  textAlign:'left'
}
const heading={
  flex:'3',
  width: '100%'
}
const freeLance = {
  msg:'I have run my own business selling websites. I have been developing for clients a few years now. I get paid by consultation. They index very well on the google search engine.',
  link: 'Freelance Web Pages'
}
const bootCamp = {
  msg: 'I am fluent in Javascript, HTML, CSS, JQuery, SQL, PHP, Node.JS, React, and GitHub. I deploy my sites with Heroku. I have experience writing Java. I am patient, understanding, logical, and level headed.'
}

class App extends Component {
  constructor(){
    super()

    this.state = {
      projects: [
        {
          title: 'Yoga Class Generator',
          url: "https://mighty-wave-90208.herokuapp.com/"
        },
        {
              title:'Extreme Sports Aviation',
              url:"https://protected-shelf-29067.herokuapp.com/"
            },
            {  title: 'Inside Outside Improvements',
                   url:'http://insideoutsideimprovements.com/'},
        {
        title: 'New York Code and Design Academy Class projects',
        url: "https://salty-forest-43612.herokuapp.com/"
      },
      {
        title:'Comedy Portfolio Page',
        url:"https://desolate-meadow-81674.herokuapp.com/"
      },
      {
        title:'Frank Dimodica Art',
        url:"http://www.frankdimodicaart.com/"
      },

      ]
    }
  }

  render() {
    return (
      <div className="App">


<James />

<div style={divStyle} style={divStyle} className="App">
<div style={linkDivStyle}>
<Links webSiteName="GitHub" image={git} url="https://github.com/JamesMedina7787"/><br/>


<Links webSiteName="LinkedIn" image={linked} url="https://www.linkedin.com/in/james-medina-766170161/"/>
</div>
<AboutMe message={bootCamp.msg}/>
<PortSection style={divStyle2} sectionName="Full Stack Developer"/>
<div style={linkDivStyle}>
<Links webSiteName="Blog" image={start} url="#Blogs about my web developement career"/><br/>
<Links webSiteName="Freelance" image={nyscda} url="#Freelance Web Pages"/>
</div>
<AboutMe message={freeLance.msg}/>


<PortSection sectionName="New York Code + Design Projects"/>

<div style={divStyle2}>
<Project webSiteName="New York Code and Design Academy Class Projects" image={scope} url="https://salty-forest-43612.herokuapp.com/"/>
</div>

<div style={divStyle2}>

<Project webSiteName="Yoga Class Generator" image={chakras} url="https://mighty-wave-90208.herokuapp.com/"/>

</div>

</div>


<Scroll id={freeLance.link}>
<div style={divStyle} >
<PortSection style={divStyle2} sectionName="Freelance Work Experience"/>

<div style={divStyle2}>
<Project webSiteName="Inside Outside Improvements" image={james} url="http://insideoutsideimprovements.com/"/>
</div>


<div style={divStyle2}>
<p style={siteDescription}>Brand New</p>
<Project webSiteName="Extreme Sports Aviation" image={xsa} url="https://protected-shelf-29067.herokuapp.com/"/>
</div>


<div style={divStyle2}>
<Project webSiteName="Frank Dimodica Art" image={frank} url="http://frankdimodicaart.com/"/>
</div>

</div>
</Scroll>
<div  >
<Scroll  id={blogContent.blog}>
<BrowserRouter >
    <div style={blogMenu}>
     <Navigation  />
        <Switch >
            <Route  path="/" component={Home} exact></Route>
        <Route  path="/February2" component={February2}></Route>
        <Route  path="/February3" component={February3}></Route>
        <Route  path="/February7" component={February7}></Route>
        <Route  path="/February20" component={February20}></Route>
        <Route  path="/March2" component={March2}></Route>
<Route component={Error}></Route>
        </Switch>
    </div>
</BrowserRouter>
</Scroll>
</div>
      </div>
    );
  }
}

export default App;
