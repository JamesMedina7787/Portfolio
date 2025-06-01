import React, { Component } from 'react';
// import surf from './pictures/surf.jpg'
const blogContent= {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  content:      `A real world application of the principle of SELF in Software Engineering that I would like to use as an example would be working on the McDonald's app. I love this app. Principal 8 emphasizes lifelong learning, ethical responsibility, and continuous improvement in the practice of software engineering. I chose this one because I’ve always taught myself computers and actually enjoy reteaching myself as technology advances. Ive coded Visual Basic in highschool. I learned to be a full stack developer in coding school twenty years afterwards and already freelance web developed a paying client by that point. AI is making it easier to learn now and is an excellent 

source to use toward continual learning.

I love the Mcdonald's app. I use it more than any other app. It has an excellent reward system. The rewards are generous. The only problem is that if you go to another mcdonalds location, it will order at the previous restaurant unless you continuously update the location every time. This would conflict with the principal by degrading the customer experience, especially on the side of mcdonalds since they have to throw cancelled orders away. They dont even mark the order as cancelled for an hour and a half. It is a waste of food for the most part. I would continually use the app if I worked on it to sniff out an issue like this. Its not very clear how to cancel the order either, resulting in bad customer service. 

A software engineer dedicated to continuous learning and improvement would use real-world customer feedback to guide, update, and prevent inconvenience to the public. I really think it would be a great service to the user to automatically update the location by anticipating when this issue would occur. To align with principle 8 I would suggest regular testing of the app as well. 

Frequent updates require time, money and resources. Mcdonalds might prioritize promotions and sales over this. Resulting in an ethical dilemma for engineers. Location data on the other hand could violate the users privacy. This creates another ethical dillemna. 


One concept in this code that should be defined more carefully is “reasonable time” in Principle 8.02, which states that engineers should improve their ability to create ”safe, reliable, and useful quality software at reasonable cost and within a reasonable time. It isn't clear what reasonable time means. It should reflect that reasonable time should so there is minimal loss to the customer and the restaurant's loss of food which also affects the environment.`
}
const imgStyle= {
  width:'100%'
}
class february22025 extends Component {
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

export default february22025;