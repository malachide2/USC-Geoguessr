'use client'

import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import { useState } from "react";
import styles from "./game.module.css";

export default function Game() {
    const [points, setPoints] = useState(0);
    const [imageIndex, setImageID] = useState(0);
    const unseenImages: [string, number, number][] = [["aidt.jpg", 0, 0], ["debrah.jpg", 0, 1], ["johs.jpg", 1, 0], ["joyec.jpg", 1, 1], ["valria.jpg", 0.5, 0.5]];
    const currImage = unseenImages[imageIndex];
    const clickyMapMax = 350;
    let [playerSelect, updatePlayerSelect] = useState([-1, -1]);
    const clickEvent = (event: React.MouseEvent<HTMLImageElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;
        const scaledX = offsetX/clickyMapMax;
        const scaledY = offsetY/clickyMapMax;
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
          ImageTuple={currImage}
          ZoomedHeight={clickyMapMax}
        />
        <PointCounter
          points={points}
        />
      </div>
    );
  }