import React, { Component } from 'react';
import James from "./components/James"
import Project from "./components/Project"
import frank from './pictures/frank.jpg'
import joke from './pictures/joke.png'
import chakras from './pictures/chakras.jpg'
import james from './pictures/james.gif'
import xsa from './pictures/xsa.gif'
import scope from './pictures/scope.png'
import './App.css';

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
      <div className="App">

<James projects={this.state.projects}/>
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

      </div>
    );
  }
}

export default App;
