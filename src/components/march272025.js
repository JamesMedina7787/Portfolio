import React, { Component } from 'react';
// import surf from './pictures/surf.jpg'

const blogContent = {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  width:'100%',
  fontSize: '1.38em'
};

const content = 'Chapter 7 of Quinn\’s text dives into the ethics of computer and network security, focusing heavily on hacking—both malicious and exploratory. The chapter walks us through real-world examples like Robert Tappan Morris, whose infamous worm disrupted thousands of systems in 1988. His actions weren\’t rooted in monetary gain but in curiosity and perhaps pride. For this reason, I\'ve never understood making viruses. It reminds me of children putting smoke bombs in mailboxes. Someone who knows better should certainly measure risk versus reward. Morris made so much noise it put a bullseye on his back, for almost no feasible motive at all. From a Kantian lens, his actions were selfishly motivated by the importance he placed on his own cleverness, regardless of consequence. From a social contract perspective, he violated a shared agreement by denying users access to their own machines. And while a utilitarian might argue that exposing vulnerabilities could lead to stronger defenses, Morris never disclosed his intent transparently, undermining any claim to the greater good. He could have exposes vulnerabilities in the systems that he damaged, but he damaged them and hid his actions trying to evade capture. I chose this chapter because it resonates on a personal and strategic level. I\’m drawn to cybersecurity not just to do good, but because I\’m fascinated by how systems can be understood, manipulated, and defended. I\’ve lived a life that required cleverness to survive. While nearly finishing my third term here; I\'ve slept in my car, and the very thrill of still making it through life is all is surprisingly satisfying. I\'m proud to defy the odds somewhat like Morris. I\’ve always noticed patterns, shortcuts, exploits in the real world. Now I\’m finding that same energy exists in digital systems. Understanding the hacker mindset should be about being able to predict, defend, and stay one step ahead. In that way you can get a positive result from the attention that is given to you, exactly what he would have achieved if he did this honestly in the first place. Quinn focuses a lot on ethics, which is important, but I think he soft-pedals the role of psychological drive: pride, desperation, the hunger to that matter. Psychology has been perhaps my favorite class so far in my college career. Understanding the criminal mind state could matter just as much as detecting the criminal methods. Morris obviously had a vulnerability in his mental makeup that brought him down. I would like to understand what drives people like Morris. So, I could do something important and be remembered as a powerful force. Ironically to achieve the same goals that Morris sought. Intelligence is about making it work for you, not against you. I question the meaning of intelligence in this case. For someone who strived to be such a brilliant hacker, he sure must have felt stupid getting thrown out school and convicted of a felony; all for eating the poison candy of ego. Emotional intelligence can sometimes crush the analytical intelligence of someone who is emotionally unintelligent enough not to consider the repercussions of such short sided desires.'


class March272025 extends Component {
  render() {
    return (
      <div style={blogContent} className="February7">
        <p>
          {content}
        </p>
      </div>
    );
  }
}

export default March272025;
