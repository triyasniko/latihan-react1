import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import styles from './components/About.module.css'

const About=(props)=>{
  return(
    <div>
        <NavigationBar />
        <div className="container mt-5 pt-5">
            <div className={styles.title}><h1>About The Company</h1></div>
            <div className={styles.desc}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores modi vel blanditiis doloribus commodi impedit!. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div>
        </div>
      <Footer />
    </div>
  )
}
export default About;