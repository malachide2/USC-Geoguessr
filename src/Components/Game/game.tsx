'use client'

import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import MainImage from "@/Components/MainImage/MainImage";
import { useState } from "react";

export default function Game() {
    const [points, setPoints] = useState(0)
    const clickEvent = (event: React.MouseEvent<HTMLImageElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;
        console.log(`${offsetX} ${offsetY}`);
        setPoints(offsetX + offsetY);
      }
    return (
      <div>
        <ClickyMap
        ClickEvent={clickEvent}
        />
        <PointCounter
        points={points}
        />
        {/* <MainImage/> */}
      </div>
    );
  }
  