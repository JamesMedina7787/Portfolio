import React, { Component } from 'react';
// import start from './pictures/start.jpg'
const blogContent= {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  content:     `     I have been a yoga instructor for 7 years now. It has given me plenty of satisfaction. I consider it a job though. I consider Coding as a great career. Around the same time that I started teaching yoga, I bought a book about Javascript. The book was titled “A better way to learn javascript”. It was an incredible book. I loved the functional and logical aspects of computer programming. It introduced me to the wonderful world of coding.

       My first computer book made me excited to learn more. Now that I knew how to use javascript, I yearned to put it to good use. I never had any experience with webpages before this moment in my life. I decided to learn HTML. I went to Barnes & Nobles, and I purchased HTML and CSS for dummies. It was a many in one style book. It was about a thousand pages long. It was split into sections. The sections were as follows; HTML, CSS, Javascript, JQUERY, PHP, SQL, and CMS. I read the book cover to cover.

       Finally I was able to put up web pages. I was still using a CMS called Web Baker. It was a very liberated CMS though. I still used my own HTML, CSS, Javascript, and even PHP. So I made myself a stack of business cards, and I advertised my services on my facebook page. I waited and waited. I thought that I would never pick up my first client. It took about a year to hear from someone that I knew that needed a web page for their business; “Inside Outside Improvements”.

       Inside Outside Improvements was an excellent learning experience. I used my expertise in javascript to display all the different services available. I made a list of buttons on the page. Every button had a different service offered by the company. When you clicked the service of interest to you, a dialogue describing the service sprawled across a section of the page. Every time a button was clicked, the reserved spot for description emptied, and a new service description appeared. I made a logo. I put links to all available social media connections. I used a nice template provided by Website Baker with a very pretty slider. I charged James Baxter for the website. He was very pleased.

       James Baxter was very pleased with his website. I started to look up the site on google. I wanted to progress further along in my web career, so I picked up a book on SEO. I was so pleased with my experience with the “HTML and CSS For Dummies“, that I got “SEO for dummies”. I learned all the little hacks, tips, and tricks. I continued work on the site. I informed by client that I will be continuing work on the site. I kindly asked him if he could pay me for the time. His business partner, in summary told me to get lost. So I ate it, and I continued work on the site. I got it to a very impressive ranking on google.

       My next project was Frank Dimodica Art. Frank Dimodica saw the work that I did on Inside Outside Improvements. He checked out my portfolio page, and contacted me about working on the project. I met with him and arranged to start work. I did not want to get stiffed again. I had to completely change my business model. So I told him up front that I will be constructing the page in installments. I would work by being payed some hundreds of dollars every time we got together and planned the next step. So this is how I work today with my freelance work; by consultation.

       Frank Dimodica Art was a tremendous success. My favorite Freelance project so far. It was still constructed through the same CMS - “Website Baker". It has excellent SEO. His cousin sculpted the world famous Wall Street Bull. I am proud to say that it ranks better on google than his cousin’s website does. I’ve gotten payed by consultation ever since. He still comes to me from time to time asking to add to his galleries. FrankDimodicaArt.com is up and running and I continue to get paid up until the present day.

       FrankDimodicaArt.com and InsideOutsideImprovements.com both were successful sites. I was hungry for more though. First of all, the sites were http and not https. A problem that I didn’t know how to fix. They were still dependent on the CMS website baker. It made it very hard to fiddle with when I wanted to modify the sites. Also, the CMS seemed to be dwindling away. I couldn’t find new templates after a while. It became increasingly hard to make new pages. Another problem I was having was adding modules, if I wanted to add a map or some other function. It just seemed like I should be moving on by this point, but where? Working freelance had it’s limitations too. I just wasn’t making the living of my dreams. I read another “For Dummies:” book about native Java. It was tremendously interesting. I copied all the code examples in my notebooks, and traced over them with colored pencils then pens. As fascinated as I was by Java, I just didn’t really know ultimately how to apply it to my professional work and goals. The time had come to take the next step in my coding career. I was going to have to go back to school.
  `
}
const imgStyle= {
  width:'100%'
}
class February2 extends Component {
  render() {
    console.log()
    return (
      <div  className="February2">
      <p style={blogContent}>
{blogContent.content}
      </p>
      </div>
    );
  }
}

export default February2;
