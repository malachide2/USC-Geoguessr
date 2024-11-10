'use client'

import React, { useState } from 'react';
import Image from "next/image";
import styles from "./clickymap.module.css";

interface Props {
  ClickEvent: (event: React.MouseEvent<HTMLImageElement>) => void;
  ImageTuple: [string, number, number];
  ZoomedHeight: number
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
          src={`/temp/${props.ImageTuple[0]}`}
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
        style={{ width: isHovering ? `${props.ZoomedHeight}px` : '15%',  opacity: isHovering ? '1' : '0.75'}}
        priority
      />
    </div>
  );
}

export default ClickyMap;