import React from 'react'
import styles from '../home_page/home.module.css'
import Navigation from '../navigation/navigation'

export default function home() {
  return (
    <div className={styles.h1}>
        <Navigation/>
        home
    </div>
  )
}
