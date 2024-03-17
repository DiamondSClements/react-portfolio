import React from 'react';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import './index.css'; 

function App() {
  return (
    <div>
      <Header />
      <main>
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;