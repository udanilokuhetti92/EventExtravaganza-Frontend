import React from 'react'
import styles from '../packages/packages.module.css'
import Navigation from '../navigation/navigation'

export default function () {
  return (
    <div>
        <div className={styles.box1}>
            {<Navigation/>}
            <p className={styles.p1}>Select best package for you</p>
            <p className={styles.p2}>We are offering you a selection of specific packages, each designed to meet different needs. These packages come <br />with various features tailored to enhance your experience and provide the best value. Whether you require basic <br /> functionalities or advanced services, we have options that suit your preferences.</p>
            <button className={styles.b1}>Book Now</button>
        </div>
        <div className={styles.box2}>
            <div class={styles.card}>
            <div class={styles.image}>
                <span class={styles.text}><ul>
                    <li className={styles.li3}>Silver verification badge</li>
                    <li className={styles.li3}>Up to 50 photo uploads</li>
                    <li className={styles.li3}>Portfolio section</li>
                    <li className={styles.li3}>Event calender</li>
                    <li className={styles.li3}>Checklist</li>
                    <li className={styles.li3}>Customer support</li>
                    </ul></span></div>
                <span class={styles.title}>Silver Package</span>
                <span class={styles.price}>$100</span>
            </div>

            <div class={styles.card}>
            <div class={styles.image}>
                <span class={styles.text}><ul>
                    <li className={styles.li3}>Gold Verification badge</li>
                    <li className={styles.li3}>Up to 75 photo uploads</li>
                    <li className={styles.li3}>Portfolio section</li>
                    <li className={styles.li3}>Event calender</li>
                    <li className={styles.li3}>Checklist</li>
                    <li className={styles.li3}>Priority customer support</li>
                    </ul></span></div>
                <span class={styles.title}>Gold Package</span>
                <span class={styles.price}>$200</span>
            </div>

            <div class={styles.card}>
            <div class={styles.image}>
                <span class={styles.text}><ul>
                    <li className={styles.li3}>Platinum Verification badge</li>
                    <li className={styles.li3}>Up to 100 photo uploads</li>
                    <li className={styles.li3}>Portfolio section</li>
                    <li className={styles.li3}>Event calender</li>
                    <li className={styles.li3}>Checklist</li>
                    <li className={styles.li3}>Priority customer support</li>

                    </ul></span></div>
                <span class={styles.title}>Platinum Package</span>
                <span class={styles.price}>$300</span>
            </div>
            
        </div>
    </div>
  )
}
