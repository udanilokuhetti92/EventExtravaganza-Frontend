import React from 'react'
import styles from '../home_page/home_page.module.css'
import video from '../home_page/images/home2.mp4';
import { useNavigate } from "react-router-dom";




export default function () {
  const navigate = useNavigate();
  return (
    <div className={styles.body}>
      {/* <video autoPlay loop muted playsInline className={styles.vedio}>
        <source src={video} type="video/mp4" />
      </video> */}
        <h1 className={styles.h1}>WELCOME TO EXTRAVAGANZA</h1>
        
        <div className={styles.container}>
          <button className={styles.button} onClick={()=> navigate("/organizer_login")}></button> 
          <button className={styles.button1} onClick={()=> navigate("/planner_login")}></button> 
        </div>

        <div className={styles.pbox}>
          <p className={styles.p1}>At Event Extravaganza, we are dedicated to providing a seamless platform for event organizers and planners to connect,
           collaborate, and create exceptional experiences. Our goal is to simplify the event planning process by bringing together
            industry professionals, resources, and opportunities in one place. Whether you’re a seasoned event planner or just 
             starting out, our platform helps you discover new connections, and elevate your event management skills.</p>
        </div>
    </div>
  )
}
