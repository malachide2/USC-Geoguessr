import React from "react";
import Image from "next/image";
import styles from "./mainimage.module.css";

<div className={styles.container}></div>

const MainImage = () => {
  return (
    <div className={styles.container}>
      <Image
          className={styles.image}
          src="/temp/wall.jpg"
          alt="Game Image"
          fill = {true}
      />
    </div>
  )
}
  
export default MainImage;