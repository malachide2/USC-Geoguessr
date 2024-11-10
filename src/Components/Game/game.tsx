'use client'

import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import { useState } from "react";
import styles from "./game.module.css";

export default function Game() {
    const [points, setPoints] = useState(0);
    const [displayedImageID, setDisplayedImage] = useState(0);
    let images: [string, number, number][] = [["wall.jpg", 100, 100]];
    const clickEvent = (event: React.MouseEvent<HTMLImageElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;
        console.log(`${offsetX} ${offsetY}`);
        setPoints(offsetX + offsetY);
      }
    return (
      <div>
        <ClickyMap
          ClickEvent={clickEvent}
          ImageTuple={images[0]}
        />
        <PointCounter
          points={points}
        />
      </div>
    );
  }