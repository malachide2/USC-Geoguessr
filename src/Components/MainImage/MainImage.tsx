import React from "react";
import styles from "./mainimage.module.css";

<div className={styles.container}></div>

const MainImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blog</div>
      <div className={styles.links}></div>
    </div>
  )
}  
  
export default MainImage;