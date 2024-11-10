import React from 'react'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blog</div>
      <div className={styles.links}></div>
    </div>
  )
}

export default Navbar;