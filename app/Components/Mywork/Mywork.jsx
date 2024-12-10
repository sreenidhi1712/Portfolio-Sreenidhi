
import styles from "./Mywork.module.css"



function Mywork() {

    
  return (
    <>

<div className={styles.maincontainer}>
                <div className={styles.Title}>
                        My Work
                </div>

                <div className={styles.CardContainer}>
                        <div className={styles.Cards} >
                            <div className={styles.ImageHolder}>
                                <div className={styles.Imagepositioner}>
                                       <img
                                       src="images/vibhaa.png"
                                       alt='projecimages' 
                                       className={styles.ProjectImg}
                                     
                                       
                                       />
                                </div>
                                        
                            </div>
                            <div className={styles.ContentContainer}>
                            <div className={styles.ProjectNameContainer}>
                            <p className={styles.ProjectName}>Vibhaa -  E-commerce Website</p>
                            </div>
                            <div className={styles.Description}>
                            <p>A Web Application for providing users with a seamless online shopping experience</p>
                            </div>
                            <div className={styles.ButtonContainer}>
                               <a href='https://github.com/sreenidhi1712/Vibhaa-Ecommerce-website.git' target="_blank" className={styles.Button}>View code</a>
                               <a href='https://668159998770a63c60ec81a1--tubular-chimera-2c5c99.netlify.app/' target="_blank" className={styles.Button}>View Project</a>
                            </div>
                            </div>
                        </div>
                        <div className={styles.Cards} >
                            <div className={styles.ImageHolder}>
                            <div className={styles.Imagepositioner}>
                                       <img 
                                       src="images/Newswing.png" 
                                       alt='projecimages' 
                                       className={styles.ProjectImg}
                                
                                      
                                       />
                                </div>
                            </div>
                            <div className={styles.ContentContainer}>
                            <div className={styles.ProjectNameContainer}>
                            <p className={styles.ProjectName}>News-wings</p>
                            </div>
                            <div className={styles.Description}>
                            <p> News-wings, a cutting-edge news app built with React and Tailwind CSS. Stay informed with real-time updates and a personalized news feed tailored just for you.</p>
                            </div>
                            <div className={styles.ButtonContainer}>
                               <a href='https://github.com/sreenidhi1712/News-wings.git' target="_blank" className={styles.Button}>View Code</a>
                               <a href='https://667e86a4caa5b7e969f0dfeb--radiant-pithivier-5f702f.netlify.app/' target="_blank" className={styles.Button}>View Project</a>
                            </div>
                            </div>
                        </div>
                        <div className={styles.Cards} >
                            <div className={styles.ImageHolder}>
                            <div className={styles.Imagepositioner}>
                                       <img 
                                       src="images/Chanakya.png" 
                                       alt='projecimages' 
                                       className={styles.ProjectImg}
                                     
                                     
                                       />
                                </div>
                            </div>
                            <div className={styles.ContentContainer}>
                            <div className={styles.ProjectNameContainer}>
                            <p className={styles.ProjectName}>AI Chat Bot</p>
                            </div>
                            <div className={styles.Description}>
                           <p> An AI-driven Web Application designed to provide users  content generation capabilities, similar to Google's Gemini</p>
                            </div>
                            <div className={styles.ButtonContainer} >
                               <a href='https://github.com/sreenidhi1712/Chanakya-AI.git' target="_blank" className={styles.Button}>View Code</a>
                               <a href='https://effervescent-cranachan-d112bd.netlify.app' target="_blank" className={styles.Button}>View Project</a>
                            </div>
                            </div>
                        </div>

                        <div className={styles.Cards}  >
                            <div className={styles.ImageHolder}>
                                <div className={styles.Imagepositioner}>
                                       <img 
                                       src="images/DailyMart.png"
                                       alt='projecimages' 
                                       className={styles.ProjectImg}
                                      
                                     
                                       />
                                </div>
                                        
                            </div>
                            <div className={styles.ContentContainer}>
                            <div className={styles.ProjectNameContainer}>
                            <p className={styles.ProjectName}>Daily Mart - Grocery shopping Website</p>
                            </div>
                            <div className={styles.Description}>
                            <p>A responsive MERN stack web application designed to offer users a seamless and efficient daily grocery shopping experience.</p>
                            </div>
                            <div className={styles.ButtonContainer}>
                               <a href='https://github.com/sreenidhi1712/Daily-Mart-MERN-Stack-project.git' target="_blank" className={styles.Button}>View code</a>
                               <a href='https://kaleidoscopic-raindrop-f847b8.netlify.app/' target="_blank" className={styles.Button}>View Project</a>
                            </div>
                            </div>
                        </div>
                        
                </div>

</div>
    </>
  )
}

export default Mywork
