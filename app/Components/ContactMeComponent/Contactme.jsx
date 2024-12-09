"use client";
import styles from './Contactme.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;


function Contactme() {



  const handleLinks = (links)=>{
    window.open(links, '_blank');
  }
  return (
    <div className={styles.Contactcontainer}>
             <div className={styles.ContactTitle}>
                   <p> CONTACT ME</p>
             </div>

             <div className={styles.Messager}>
                <div className={styles.emailcontainer}>
                    <MdOutlineEmail size='30'/>
                        <p className={styles.email}>sreenidhid2002@gmail.com</p>
                </div>
                <div className={styles.mobilecontainer}>
                    <FaPhoneAlt size='20'/>
                        <p className={styles.mobile}>+91 63602 91496</p>
                </div>         
             </div>

             <div className={styles.Address}>
                <IoLocationOutline className={styles.LocatioMark} size='30'/>
                        <p className={styles.address}>U-129 1st main road, Srirampuram, Blore-21</p>
             </div>
             <div   className={styles.downloadbbtncontainer}>
              <div className={styles.downloadresume} onClick={()=>handleLinks(resumeUrl)}>Checkout My Resume</div>
             </div>

             <div className={styles.SocialMedia}  >
                <FaLinkedin  size='40' className={styles.LinkedinIcon} onClick={()=>handleLinks(linkedinUrl)}/>
                            <FaGithub  size='40' className={styles.GithubIcon} onClick={()=>handleLinks(githubUrl)}/>
             </div>

    </div>
  )
}

export default Contactme
