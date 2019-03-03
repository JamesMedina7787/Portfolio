import React, { Component } from 'react';
// import surf from './pictures/surf.jpg'
const blogContent= {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  textAlignLast:'left',
  content:  `     I am back in New Rochelle, New York. It's been a week since I left Florida. I’ve been reading my CSS book since I returned. It is titled -" CSS: The Definitive Guide.” It is the 2018 edition. I am a freelance web developer. Part of working in technology as I understand it, is staying ahead of the curb. Looking for work has been a long venture. I actually applied for about 50 jobs this past week. I really hope I can find a more stable job. In the meantime though, I have to rely on Freelance. So I have to improve the styles and looks of my pages, so that they attract more clients. CSS is proving to be so fascinating that I’m sure mastering my skills in it will pay off in spades.
`
}
const imgStyle= {
  width:'100%'
}
class March2 extends Component {
  render() {
    console.log()
    return (
      <div style={blogContent} className="March2">
      <p>
{blogContent.content}
      </p>
      </div>
    );
  }
}

export default March2;
