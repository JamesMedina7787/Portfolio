import React, { Component } from 'react';
import James from "./components/James"
import Project from "./components/Project"
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


<Project webSiteName="Yoga Generator"/>
</div>

<div>

<Project webSiteName="Extreme Sports Aviation"/>
</div>
<div>
<Project webSiteName="New York Code and Design Academy Class Projects"/>
</div>

<div>
<Project webSiteName="Comedy Portfolio Page"/>
</div>

<div>

<Project webSiteName="Frank Dimodica Art"/>
</div>
<div>

<Project webSiteName="Inside Outside Improvements"/>
</div>

      </div>
    );
  }
}

export default App;
