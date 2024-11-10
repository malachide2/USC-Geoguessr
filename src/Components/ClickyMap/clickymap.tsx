'use client'

import React, { useState } from 'react';
import Image from "next/image";
import styles from "./clickymap.module.css";

interface Props {
  ClickEvent: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const ClickyMap: React.FC<Props> = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: isHovering ? '30%' : '15%',  opacity: isHovering ? '1' : '0.75'}}
        priority
      />
    </div>
  );
}

export default ClickyMap;