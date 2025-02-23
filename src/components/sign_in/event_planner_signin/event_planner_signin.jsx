import React from 'react'
import styles from '../event_planner_signin/event_planner_signin.module.css';


export default function event_planner_signin() {
  return (
    <div className={styles.container}>
        <div className={styles.box1}>
            <h1 className={styles.h1}>Create Event Organizer Account</h1> <br />
            <p className={styles.p1}>Provide correct information to setup your account</p> <br />

            <label className={styles.l1} htmlFor="FullName">Email</label> <br />
            <input className={styles.i1} type="text" name="FullName" placeholder="Enter your email" required/>

            <br /> <br />

            <label className={styles.l1} htmlFor="FullName">Password</label> <br />
            <input className={styles.i1} type="text" name="FullName" placeholder="Enter your password" required/>

            <br /> 

            <button className={styles.b1} type="submit">Sign up</button>
        </div>
    </div>
  )
}
