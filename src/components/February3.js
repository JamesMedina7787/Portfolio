import React, { Component } from 'react';
// import nyscda from './pictures/nyscda.jpg'
const blogContent= {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  content:`     I hit a road block in my coding career. I had two freelance projects under my belt, but I wasn’t making nearly as much money as I needed to support my life. I learned many different programming languages, but I still was dependant on a CMS. Despite everything I knew, going about getting a job was a totally different venture. I needed job training. I did some research, and found a very interesting option; “Coding Boot Camp”.

     I explored my options. Ultimately I came upon a NYC school in downtown Manhattan. It was called; “New York and Design Academy”. I enrolled in the “Javascript Intensive” program. My first impression of the school was a good one. I was very humbled. I thought I had known so much about coding, and I did. I was way ahead of the class. As the class continued I learned so much more than I possibly predicted I would. I was really getting my moneys worth.

     I learned so much from New York Code and Design Academy. I learned to create elements and attributes with nothing but javascript. We learned to literally build an entire page from scratch, using nothing but javascript. Also, as much as I knew, I wasn’t working as fast as possible. I learned how to use three fingers on my Mac mouse pad to flip through all the open applications. I learned how to type html and hit tab, type a tag name and hit tab, finish commonly used words instantly by hitting tab. I learned how to use an excellent text editor named atom. I learned to play with JSfiddle. I learned how to use the terminal on my Macintosh laptop. I learned to switch directories, create files, delete files, toggle through the terminal history with the up and down keys, how to copy files, and so much more. I learned to protect, deploy, share, and work together on projects using gitHub. I learned perhaps the greatest technology I never knew about Node.JS. Finally, I wasn’t dependent on a CMS anymore. We learned routing and regular expressions, which I did already know about, but not in terms of its usefulness in routing pages through the back end. We learned to use APIs. We went into depth with PostgreSQL. I knew SQL, but not through the terminal like that, and not in combination with sequelize and all the other wonderful modules of Node.JS.  Using JQuery in combination with API object files, simply amazing. By the time the course was done my head was about to explode. Then we were introduced to REACT.
`
}
const imgStyle= {
  width:'100%'
}
class February3 extends Component {
  render() {
    console.log()
    return (
      <div style ={blogContent} className="February3">
      <p>
      {blogContent.content}
      </p>
      </div>
    );
  }
}

export default February3;
