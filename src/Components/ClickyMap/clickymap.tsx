'use client'

import React, { useState } from 'react';
import Image from "next/image";
import styles from "./clickymap.module.css";

interface Props {
  ClickEvent: (event: React.MouseEvent<HTMLImageElement>) => void;
  ImageTuple: [string, number, number];
  ZoomedHeight: number
  PlayerInput: number[];
}

const ClickyMap: React.FC<Props> = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const markerSize = 20;


  return (
    <div className={styles.container}>
        <Image
            className={styles.image}
            src={`/location-imgs/${props.ImageTuple[0]}`}
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
            className={styles.targetMarker}
            src='/marker.png'
            alt='marker'
            width={10}
            height={10}
            style={{ bottom: `${props.ZoomedHeight - props.ImageTuple[2]*props.ZoomedHeight}px`, right: `${props.ZoomedHeight - props.ImageTuple[1]*props.ZoomedHeight}px`}}
          />
          <Image
            className={styles.playerMarker}
            src='/marker.png'
            alt='marker'
            width={markerSize}
            height={markerSize}
            style={{ 
              bottom: `${props.ZoomedHeight - props.PlayerInput[1]*props.ZoomedHeight}px`, 
              right: `${props.ZoomedHeight - props.PlayerInput[0]*props.ZoomedHeight - markerSize/2}px`,
              display: props.PlayerInput[0] + props.PlayerInput[1] >= 0 ? 'true' : 'false'
            }}
          />
        </div>
      </div>
  );
}

export default ClickyMap;