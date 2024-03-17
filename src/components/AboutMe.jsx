import React from 'react';
import portfolioPic  from '../assets/images/diamond-me.png';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>💎About Me💎</h2>
      <img src={portfolioPic} alt="Diamond" className="diamond-me" />
      <p>Hi everyone! I'm Diamond and I'm a military vet from Virginia. I have a background in IT but mostly in network administration. I wanted to explore other avenues and that led me to coding. Hopefully by the end of this course, I'll be able to come back to this page and revamp it so it doesn't look like this so fingers crossed lol. I enjoy weightlifting, baking, and ..uhhh... binge-watching crime documentaries. Don't worry, the only thing getting butchered is my code.</p>
    </section>
  );
}

export default AboutMe;