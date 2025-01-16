// "use client";
// import './App.css';
// import React from 'react'
// import About from './Components/AboutComponent/About';
// import Skills from './Components/SkillsComponent/Skills';
// import Mywork from './Components/Mywork/Mywork';
// import Contactme from './Components/ContactMeComponent/Contactme';
// import { Element } from 'react-scroll';

// function App() {
//   return (
//     <div className="App">
       
//        <Element name="about" className="element" >
//         <About/>
//       </Element>
//          <Element name="skills" className="element" > 
//        <Skills/>
//       </Element>
//           <Element name="mywork" className="element" > 
//       <Mywork/>
//      </Element>
//           <Element name="contactme" className="element" >
//      <Contactme/>
//       </Element>
 
          
        
//     </div>
//   );
// }

// export default App;
"use client";
import './App.css';
import React from 'react';
import About from './Components/AboutComponent/About';
import Skills from './Components/SkillsComponent/Skills';
import Mywork from './Components/Mywork/Mywork';
import Contactme from './Components/ContactMeComponent/Contactme';

function App() {
  return (
    <div className="App">
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="mywork">
        <Mywork />
      </div>
      <div id="contactme">
        <Contactme />
      </div>
    </div>
  );
}

export default App;