"use client";
import './App.css';
import React from 'react'
import About from './Components/AboutComponent/About';
import Skills from './Components/SkillsComponent/Skills';
import Mywork from './Components/Mywork/Mywork';
import Contactme from './Components/ContactMeComponent/Contactme';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
       
       <Element name="about" className="element" >
        <About/>
      </Element>
         <Element name="skills" className="element" > 
       <Skills/>
      </Element>
          <Element name="mywork" className="element" > 
      <Mywork/>
     </Element>
          <Element name="contactme" className="element" >
     <Contactme/>
      </Element>
 
          
        
    </div>
  );
}

export default App;
