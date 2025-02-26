import React from 'react'
import styles from '../home_page/home_page.module.css'
import Navigation from '../navigation/navigation'

export default function home_page() {
  return (
    <div>
        <div className={styles.main1}>
            {<Navigation/>}
            <div className={styles.box11}> 
                <div className={styles.box1}>
                    <h2 className={styles.h1}>WELCOME TO EXTRAVAGANZA</h2>
                    <button class={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                        <div class={styles.text}>
                            Go To Your Projects
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
