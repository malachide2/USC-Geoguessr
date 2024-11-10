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
        <div 
          className={styles.mapContainer}
          style={{ width: isHovering ? `${props.ZoomedHeight}px` : '10rem',  opacity: isHovering ? '1' : '0.75', height: isHovering ? `${props.ZoomedHeight}px` : '10rem'}}
        >
          <Image
            className={styles.map}
            src="/clickymap.png"
            alt="Map of USC"
            onClick={props.ClickEvent}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            fill={true}
            priority
          />
          <Image
            className={styles.marker}
            src='/marker.png'
            alt='marker'
            width={20}
            height={20}
          />
        </div>
      </div>
  );
}

export default ClickyMap;