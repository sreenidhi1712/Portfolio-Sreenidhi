import styles from "./About.module.css"


function About() {
  return (
    <div className={styles.MainContainer}>
    
        <div className={styles.Title}>
           
                <p className={styles.domain}>Frontend ReactJS Developer</p>
                <div className={styles.Name}>
                    SREENIDHI D
                </div>
                <div className={styles.Description}>
                       
                        <p>Crafting intuitive and dynamic web experiences with a passion for clean code and modern design. Eager to bring creativity and technical skills to innovative projects.</p>
                </div>
        </div>
        <div className={styles.ImageContainer}>
              <div className={styles.ImageHolder}>
                  <img 
                  className={styles.Image}
                  src="/sreenidhi.jpg" 
                  alt="myself"
                  // priority
                  //  loading="eager"
                  //  width={800}
                  //   height={800}
                   
                  />
              </div>
        </div>

    </div>
  )
}

export default About
