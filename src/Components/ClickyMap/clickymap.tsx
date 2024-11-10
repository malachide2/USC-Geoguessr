'use client'

import React from "react";
import Image from "next/image";
import styles from "./clickymap.module.css";

interface Props {
  ClickEvent: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const ClickyMap: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Image
          className={styles.image}
          src="/temp/wall.jpg"
          alt="Game Image"
          fill = {true}
      />
      <Image
        className={styles.map}
        src="/clickymap.png"
        alt="Map of USC"
        width={180}
        height={180}
        onClick={props.ClickEvent}
        priority
      />
    </div>
  );
}

export default ClickyMap;