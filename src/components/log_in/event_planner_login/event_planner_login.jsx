import React from 'react'
import  styles from '../event_planner_login/event_planner_login.module.css'

export default function event_planner_login() {
  return (
    <div>
      <h1 className={styles.h1}>Create Event Planner Account</h1>
      <p className={styles.p1}>Provide correct information to setup your account</p>

      <div className={styles.container}>

        <div className={styles.box1}>
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

          <label className={styles.l1} htmlFor="">Address</label> <br />
          <input className={styles.i1} type="text" placeholder='Enter address'/>

          <br /> <br /> 

          <label className={styles.l1} htmlFor="">City</label> <br />
          <input className={styles.i1} type="text" placeholder='Enter city'/>
        </div>

        <div className={styles.box2}>

          <label className={styles.l1} htmlFor="">Gender</label> <br />
          <input className={styles.i1} type="text" placeholder='Enter your gender'/>
          
          <br /> <br /> 

          <label className={styles.l1} htmlFor="">Speciality</label> <br />
          <select className={styles.i1} name="" id="">
            <option value="Weddings">Weddings</option>
            <option value="Parties">Parties</option>
            <option value="Both">Both</option>
          </select>

          <br /> <br /> 

          <label className={styles.l1} htmlFor="">Your Experience</label> <br />
          <textarea className={styles.textarea} type="text" placeholder='Enter your expeirience'/>

          <br />
          
          <button className={styles.b1} type='submit'>Sign up</button>
          <p className={styles.p2}>Already have a account? <span className={styles.span}>Login</span></p>

        </div>

      </div>
     
    </div>
  )
}
