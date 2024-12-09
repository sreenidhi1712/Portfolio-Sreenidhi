import React from 'react'
import Styles from './Skills.module.css'
import { FaReact, FaBootstrap, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiRedux ,SiMui } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div className={Styles.MainContainer}>
              <div className={Styles.CardContainerFramework}>
                            <p>MY SKILLS</p>
              </div>
              <div className={Styles.CardContainerLibraries}>
              <div className={Styles.Cards}>
                      <RiNextjsFill className={Styles.skillsIcon}  title="NEXT JS" size="4rem"/>
                      <p>NEXT JS</p>
            </div>
            <div className={Styles.Cards}>
                      <SiTypescript className={Styles.skillsIcon}  title="TYPESCRIPT" size="4rem"/>
                      <p>TYPESCRIPT</p>
            </div>
              <div className={Styles.Cards}>
                      <FaReact className={Styles.skillsIcon}  title="React" size="4rem"/>
                      <p>REACTJS</p>
            </div>
            <div className={Styles.Cards}>
                      <FaNode className={Styles.skillsIcon}  title="NODEJS" size="4rem"/>
                      <p>NODEJS</p>
            </div>
            <div className={Styles.Cards}>
                      <SiExpress className={Styles.skillsIcon}  title="EXPRESSJS" size="4rem"/>
                      <p>EXPRESSJS</p>
            </div>
            <div className={Styles.Cards}>
                      <SiMongodb className={Styles.skillsIcon}  title="MONGODB" size="4rem"/>
                      <p>MONGODB</p>
            </div>
            <div className={Styles.Cards}>
                    <RiTailwindCssFill className={Styles.skillsIcon}  title="Tailwind-css" size="4rem"/>
                    <p>TAILWIND CSS</p>
                </div>
            <div className={Styles.Cards}>
                    <SiRedux className={Styles.skillsIcon}  title="Redux" size="4rem"/>
                    <p>REDUX</p>
                </div>
                <div className={Styles.Cards}>
                    <SiMui className={Styles.skillsIcon}  title="Material-ui" size="4rem"/>
                    <p>MATERIAL-UI</p>
                </div>
                <div className={Styles.Cards}>
                  <FaBootstrap  className={Styles.skillsIcon}  title="Bootstrap" size="4rem"/>
                  <p>BOOTSTRAP</p>
                </div>
                <div className={Styles.Cards}>
                    <FaGitAlt className={Styles.skillsIcon}   title="Git"  size="4rem" />
                    <p>GIT</p>
                  </div>
                  <div className={Styles.Cards}>
                    <FaGithub className={Styles.skillsIcon}   title="GITHUB"  size="4rem" />
                    <p>GITHUB</p>
                  </div>
               

                <div className={Styles.Cards}>
                        <FaHtml5 className={Styles.skillsIcon}  title="HTML5" size="4rem"/>
                        <p>HTML</p>
              </div>

              <div className={Styles.Cards}>
                    <FaCss3Alt className={Styles.skillsIcon}  title="CSS3" size="4rem"/>
                    <p>CSS</p>
              </div>
              <div className={Styles.Cards}>
                      <FaJs className={Styles.skillsIcon}   title="JavaScript" size="4rem"/>
                      <p>JAVASCRIPT</p>
              </div>
              </div>
    </div>
  )
}

export default Skills
