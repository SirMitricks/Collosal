import { useState } from 'react'
import styles from './Herosection.module.scss'
import { Link } from 'react-router-dom'


export default function Herosection() {

  return (
    <>
      <main>
        <section className={styles.HS_content}>
            <h2>CLIENT-DEVELOPMENT DRIVEN</h2>
            <h1>We Design. We Develop. We Ship. <br /> In The Same Day.</h1>
            <p>We are committed to not making clients wait. We will deliver the work <br /> as quickly as possible. Even on the same day. Even so, we do not <br /> reduce the quality of our work.</p>
        </section>
        <section className={styles.HS_twoButton}>
            <Link to='/'>Send Quote</Link>
            <Link to='/'>Learn More</Link>
        </section>
      </main>
    </>
  )
}