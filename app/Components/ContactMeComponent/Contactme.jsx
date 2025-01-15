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

const contacts = [
  {
    icon: MdOutlineEmail,
    text: "sreenidhid2002@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    text: "+91 63602 91496",
  },
  {
    icon: IoLocationOutline,
    text: "U-129 1st main road, Srirampuram, Blore-21",
  },
];

function Contactme() {



  const handleLinks = (links)=>{
    window.open(links, '_blank');
  }
  return (
    <div className={styles.Contactcontainer}>
             <div className={styles.ContactTitle}>
                   <p> CONTACT ME</p>
             </div>

             {/* <div className={styles.Messager}>
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
             </div> */}

             <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>✉️</div>
        <h2 className={styles.title}>Write to Me</h2>
        <p className={styles.subtitle}>
           Help me out with your Feedback or Referrals
        </p>
      </div>
      <form className={styles.form}>
        {/* Name Fields */}
        <div className={styles.row}>
          <input type="text" placeholder="First Name" className={styles.input} />
          <input type="text" placeholder="Last Name" className={styles.input} />
        </div>
        {/* Email and Subject Fields */}
        <div className={styles.row}>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.input}
          />
          <input type="text" placeholder="Subject" className={styles.input} />
        </div>
        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          className={styles.textarea}
        ></textarea>
        {/* Submit Button */}
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>

    <div className={styles.contactContainer}>
      {contacts.map((contact, index) => (
        <div className={styles.contactCard} key={index}>
          <contact.icon className={styles.contactIcon} />
          <p className={styles.contactText}>{contact.text}</p>
        </div>
      ))}
    </div>
             <div   className={styles.downloadbbtncontainer}>
              <div className={styles.downloadresume} onClick={()=>handleLinks(resumeUrl)}>View My Resume</div>
             </div>

             <div className={styles.SocialMedia}  >
                <FaLinkedin  size='40' className={styles.LinkedinIcon} onClick={()=>handleLinks(linkedinUrl)}/>
                            <FaGithub  size='40' className={styles.GithubIcon} onClick={()=>handleLinks(githubUrl)}/>
             </div>

    </div>
  )
}

export default Contactme
