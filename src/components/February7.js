import React, { Component } from 'react';
// import surf from './pictures/surf.jpg'
const blogContent= {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
   width:'100%',
  fontSize: '1.38em',
  content:      `     I graduated New York Code and Design on July 5th 2018. New York Code and Design appointed a career counselor for us. This was one of the greatest things about the program. She made sure we put our resumes together the right way. She made sure we had our linked in correctly set up. She made sure we uploaded all our work to GitHub with proper readme’s and what not. She basically coached us for job seeking and let us in on what employers were looking for. I scheduled an appointment with my career counselor one more time before I walked out of those doors forever. She gave me some great advice about putting a portfolio together. I really appreciated that.

     I started to work on my portfolio. My teacher gave us one last assignment that he overlooked in the last week. The name of the assignment was scope. It was from earlier in the program. So after I received a passing mark on it, I took it to the next level. I took a "display the key pressed" assignment and turned it into a game of hangman. I took a button war assignment and added Jquery to make all sorts of  effects. I took a pizza order form assignment and routed it to decorate a virtual pizza with the clients choice of toppings. I took a console story assignment, and turned it into a virtual lobby. I used an api to display random gifs as the elevator doors opened and closed in a virtual lobby. I wanted to never forget the precious skills we learned at the academy.

     I worked all summer on my portfolio. I never really expected to achieve my goals with just a certificate of completion. I believe that hard work pays off. My goal is to work until my dreams come true. After all, the internet is a like a clear glass window. Git push heroku master and my portfolio reflects all the work I do everyday. Someone is bound to pick up on my dedication and talent. I put off the job search for a long time. This is why I code. I don’t even need a paycheck to stay motivated. I love coding. It’s that simple. A paycheck would be nice though. Yoga and freelance just wasn’t cutting it. I worked 4 and a half years straight teaching yoga without a single vacation. In the meantime I found a new client that wanted me to put up a website for him, for an airplane school in Canada. So I took a down payment, and decided it was time to break free of my routine. I packed my bags and laptop, and went on a Florida vacation. Just my new freelance job and faith, in my ability, to finally make a living out of this.`
}
 

class February7 extends Component {
  render() {
    console.log()
    return (
      <div style={blogContent} className="February7">
      <p>
{blogContent.content}
      </p>
      </div>
    );
  }
}

export default February7;
