import { useState } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { Photo } from '../../assets/Photo'
export default function Header() {


  return (
    <>
        <header>
            <div>
              <Link to="/home" className={styles.logo}><img src={Photo.Logo} alt="" /></Link>
              <nav>
                <NavLink to="/Services" className={({ isActive }: { isActive: boolean }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>Services</NavLink>
                <NavLink to="/HowWeWork" className={({ isActive }: { isActive: boolean }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>How We Work</NavLink>
                <NavLink to="/Projects" className={({ isActive }: { isActive: boolean }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>Projects</NavLink>
                <NavLink to="/About" className={({ isActive }: { isActive: boolean }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>About</NavLink>
              </nav>
              <Link to="/" className={styles.contact}>Contact</Link>
            </div>
        </header>
    </>
  )
}


