import React, { Component } from 'react';
import Project from "./components/Project"
import frank from './pictures/frank.jpg'
import joke from './pictures/joke.png'
import chakras from './pictures/chakras.jpg'
import james from './pictures/james.gif'
import xsa from './pictures/xsa.gif'
import scope from './pictures/scope.png'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Error from "./components/Error"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import February2 from "./components/February2"
import February3 from "./components/February3"
import James from "./components/James"
import {Link} from "react-router-dom";
import Routes from "./components/Routes"
import {NavLink} from 'react-router-dom'
import './App.css';



const divStyle= {
  border:"2px dotted black",
  display:"flex",
  flexDirection:"column"
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
   {  title: 'Inside Outside Improvements',
          url:'http://insideoutsideimprovements.com/'}
      ]
    }
  }

  render() {
    return (
      <div style={divStyle} className="App">


<James />
<div>

<Project webSiteName="Yoga Generator" image={chakras} url="https://mighty-wave-90208.herokuapp.com/"/>

</div>

<div>

<Project webSiteName="Extreme Sports Aviation" image={xsa} url="https://protected-shelf-29067.herokuapp.com/"/>
</div>
<div>
<Project webSiteName="New York Code and Design Academy Class Projects" image={scope} url="https://salty-forest-43612.herokuapp.com/"/>
</div>

<div>
<Project webSiteName="Comedy Portfolio Page" image={joke} url="https://desolate-meadow-81674.herokuapp.com/"/>
</div>

<div>

<Project webSiteName="Frank Dimodica Art" image={frank} url="http://frankdimodicaart.com/"/>

</div>
<div>

<Project webSiteName="Inside Outside Improvements" image={james} url="http://insideoutsideimprovements.com/"/>
</div>

<BrowserRouter>
    <div>
     <Navigation />
        <Switch>
            <Route path="/" component={Home} exact></Route>
        <Route path="/February2" component={February2}></Route>
          <Route path="/February3" component={February3}></Route>
<Route component={Error}></Route>



        </Switch>
    </div>
</BrowserRouter>

      </div>
    );
  }
}

export default App;
