// "use client"
// import  styles from './Navbar.module.css'
// import { IoMdMenu } from "react-icons/io";
// import { MdCancel } from "react-icons/md";
// import { useState } from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';



// function Navbar() {
//   const [togglemenu, setTogglemneu] = useState(false)
//   const handleToggle = () => {
//       setTogglemneu(!togglemenu)
//   }

//   return (
//     <div className={styles.NavbarContainer}>
//       <div className={styles.NavbarPart}>
//             <div className={styles.Title}>
//                   <p onClick={() => scroll.scrollToTop()}>SREENIDHI D</p>
//             </div>
//             <div className={styles.NavbarContent}>
//             <p>
//                     <Link to="about" smooth={true} duration={1000}>About</Link>
       
//                </p>
//                 <p>
//                     <Link to="skills" smooth={true} duration={1000}>Skills</Link> 
//                 </p>
//                 <p>
//                     <Link to="mywork" smooth={true} duration={1000}>My Project</Link>   
//                 </p>
//                 <p>
          
//                     <Link to="contactme" smooth={true} duration={1000}>Contact me</Link>  
//                 </p>
               
//                 <IoMdMenu className={styles.Menuicon} onClick={handleToggle} size='40'/>
//           </div>
//       </div>
//       <div className= {styles.MenuBarContent} style={togglemenu?{transform:"translateY(0)"}:{transform:"translateY(-100%)"}} >

//           <MdCancel className={styles.Cancelicon} size='40' onClick={handleToggle}/>
//           <p>
//               <Link to="about" smooth={true} duration={1000}>About</Link>
//           </p>
//           <p>
//               <Link to="skills" smooth={true} duration={1000}>Skills</Link> 
//           </p>
//           <p>
//               <Link to="mywork" smooth={true} duration={1000}>My Project</Link>   
//           </p>
//           <p>
//               <Link to="contactme" smooth={true} duration={1000}>Contact me</Link>  
//           </p>    
             
//       </div>
//     </div>
//   )
// }

// export default Navbar
"use client";
import styles from './Navbar.module.css';
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';

function Navbar() {
  const [togglemenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!togglemenu);
  };

  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.NavbarPart}>
        <div className={styles.Title}>
          <p onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>SREENIDHI D</p>
        </div>
        <div className={styles.NavbarContent}>
          <p>
            <a className={styles.anchorNavbar} href="#about">About</a>
          </p>
          <p>
            <a className={styles.anchorNavbar} href="#skills">Skills</a>
          </p>
          <p>
            <a className={styles.anchorNavbar} href="#mywork">My Project</a>
          </p>
          <p>
            <a className={styles.anchorNavbar} href="#contactme">Contact me</a>
          </p>
          <IoMdMenu className={styles.Menuicon} onClick={handleToggle} size='40' />
        </div>
      </div>
      <div className={styles.MenuBarContent} style={togglemenu ? { transform: "translateY(0)" } : { transform: "translateY(-100%)" }}>
        <MdCancel className={styles.Cancelicon} size='40' onClick={handleToggle} />
        <p>
          <a className={styles.anchorNavbar} href="#about">About</a>
        </p>
        <p>
          <a className={styles.anchorNavbar} href="#skills">Skills</a>
        </p>
        <p>
          <a className={styles.anchorNavbar} href="#mywork">My Project</a>
        </p>
        <p>
          <a className={styles.anchorNavbar} href="#contactme">Contact me</a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;