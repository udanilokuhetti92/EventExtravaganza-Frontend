import React from 'react'
import styles from '../event_organizer_login/event_organizer_login.module.css'

export default function event_organizer_login() {
  return (
    <div className={styles.container}>
        <div className={styles.box1}>
            <h1 className={styles.h1}>Create Event Organizer Account</h1>
            <p className={styles.p1}>Provide correct information to setup your account</p>

            <br />

            <label className={styles.l1} htmlFor="">Full Name</label> <br />
            <input className={styles.i1} type="text" placeholder='Enter your name'/>
            
            <br /> <br /> 

            <label className={styles.l1} htmlFor="">Email</label> <br />
            <input className={styles.i1} type="text" placeholder='Enter your email'/>

            <br /> <br /> 

            <label className={styles.l1} htmlFor="">Create Password</label> <br />
            <input className={styles.i1} type="text" placeholder='Enter a password'/>

            <br /> <br /> 

            <label className={styles.l1} htmlFor="">Confirm Password</label> <br />
            <input className={styles.i1} type="text" placeholder='Enter password again'/>

            <br /> <br /> 

            <label className={styles.l1} htmlFor="">City</label> <br />
            <input className={styles.i1} type="text" placeholder='Enter city'/>

            <br />

            <button className={styles.b1}>Sign up</button>
            <p className={styles.p2}>Already have a account? <span className={styles.span}>Login</span></p>

        </div>   

        <div className={styles.box2}>
            <div className={styles.box3}>
                <p className={styles.p3}>At Event Extravaganza, our platform is designed with event organizers in mind. 
                    We streamline the entire event management process by offering powerful tools that let you oversee every
                     detail—from vendor coordination to real-time event updates.</p>
            </div>
        </div>  
    </div>
  )
}
