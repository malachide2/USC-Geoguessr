'use client'

import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import { useState } from "react";
import styles from "./game.module.css";

export default function Game() {
    const [points, setPoints] = useState(0);
    const [imageIndex, setImageID] = useState(0);
    const images: [string, number, number][] = [["wall.jpg", 0.5, 0.5]];
    const currImage = images[imageIndex]
    const clickEvent = (event: React.MouseEvent<HTMLImageElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;
        const scaledX = offsetX/360;
        const scaledY = offsetY/360;
        const distance = Math.sqrt((scaledX - currImage[1])*(scaledX - currImage[1]) + (scaledY - currImage[2])*(scaledY - currImage[2]))
        console.log(`${offsetX} ${offsetY}`);
        console.log(`${scaledX} ${scaledY}`);
        console.log(`${distance}`);
        setPoints(Math.floor(1000*(Math.SQRT2 - distance)/Math.SQRT2))
      }
    return (
      <div>
        <ClickyMap
          ClickEvent={clickEvent}
          ImageTuple={images[imageIndex]}
        />
        <PointCounter
          points={points}
        />
      </div>
    );
  }