
import React, { Component } from 'react';
// import surf from './pictures/surf.jpg'
const blogContent= {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  textAlignLast:'left',
  content:  `     I’m back in New York now. Florida was great. I woke up every morning, and set my laptop up on a desk, along with a notebook and a pen. I started each day by doing research, building functions, and reading through documentations of APIs and modules. Basically I did all the stuff I had to think about in the morning. I wrote blogs or added content to my pages in the middle of most days. I'd go surfing when the tide came in. I played around with CSS and and HTML all night. I rebuilt my portfolio page with REACT. I’ve been working on Extreme Sports Aviation steadily. The web page is really coming along now. It really got me into the routine of coding like an everyday job. I’m really glad I went there.`
}
const imgStyle= {
  width:'100%'
}
class February20 extends Component {
  render() {
    console.log()
    return (
      <div style={blogContent} className="February20">
      <p>
{blogContent.content}
      </p>
      </div>
    );
  }
}

export default February20;
