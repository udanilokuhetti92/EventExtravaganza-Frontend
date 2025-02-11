import React from 'react'
import styles from '../home_page/home_page.module.css'


export default function () {
  return (
    <div className={styles.body}>
        <h1 className={styles.h1}>WELCOME TO EXTRAVAGANZA</h1>
        <p className={styles.p1}>At Event Extravaganza, we are dedicated to providing a seamless platform for event organizers and planners to connect,
           collaborate, and create exceptional experiences. <br /> Our goal is to simplify the event planning process by bringing together
            industry professionals, resources, and opportunities in one place. Whether you’re a seasoned event planner or just <br />
             starting out, our platform helps you discover new connections, and elevate your event management skills.</p>
        <div className={styles.container}>
          <button className={styles.b1}>Loggin as Event Planner</button> 
          <button className={styles.b1}>Loggin as Event Organizer</button> 
        </div>
    </div>
  )
}
