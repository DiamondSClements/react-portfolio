import React from 'react';
import helloWorldImage from '../assets/images/hello-world.png';


function Header() {
  return (
    <header>
      <h1>💎Diamond Clements💎</h1>
      <nav>
        <ul>
          <li><a href="#about-me">💎About Me</a></li>
          <li><a href="#work">💎Projects</a></li>
          <li><a href="#contact-me">💎Contact Me</a></li>
          <li><a href="#">💎Resume</a></li>
        </ul>
      </nav>
      <img src={helloWorldImage} alt="Hello World" className="hello-world" />
    </header>
  );
}



export default Header;