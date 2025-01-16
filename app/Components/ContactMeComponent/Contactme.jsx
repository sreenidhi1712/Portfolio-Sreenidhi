"use client";
import styles from './Contactme.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;
const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLinks = (links)=>{
    window.open(links, '_blank');
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceID, // Replace with your EmailJS Service ID
        templateID, // Replace with your EmailJS Template ID
        {
          from_name: `${formData.firstName}  ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey// Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Failed to send the message. Please try again.");
        }
      );
  };


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
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className={styles.row}>
          <input type="text" placeholder="First Name" name='firstName' value={formData.firstName} onChange={handleChange} className={styles.input} />
          <input type="text" placeholder="Last Name" name='lastName' value={formData.lastName} onChange={handleChange} className={styles.input} />
        </div>
        {/* Email and Subject Fields */}
        <div className={styles.row}>
          <input
            type="email"
            name='email'
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          name='message'
          value={formData.message}
          onChange={handleChange}
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
