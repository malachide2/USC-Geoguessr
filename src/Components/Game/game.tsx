'use client'

import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import { useState } from "react";
import styles from "./game.module.css";
import QuitButton from "../QuitButton/QuitButton";
import { useRouter } from 'next/navigation';
import SubmitButton from "../SubmitButton/SubmitButton";
import { Yellowtail } from "next/font/google";



export default function Game() {
  const unseenImages: [string, number, number][] = [
    ["1.jpeg", 0.57, 0.61],
    ["2.jpeg", 0.52, 0.65],
    ["3.jpeg", 1, 0]];
  
  const router = useRouter();

  const QuitGame = () => {
    router.push('/');
  };
  
  
    const [points, setPoints] = useState(0);
    const [imageIndex, setImageID] = useState(0);
    let currImage = unseenImages[imageIndex];
    const clickyMapMax = 350;
    let [playerSelect, updatePlayerSelect] = useState([-1, -1]);
    const clickEvent = (event: React.MouseEvent<HTMLImageElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;
        const scaledX = offsetX/clickyMapMax;
        const scaledY = offsetY/clickyMapMax;
        
        updatePlayerSelect([scaledX, scaledY]);
        console.log(playerSelect, "player select");
      }
    const submitPress = () => {
        const scaledX = playerSelect[0];
        const scaledY = playerSelect[1];
        const distance = Math.sqrt((scaledX - currImage[1])*(scaledX - currImage[1]) + (scaledY - currImage[2])*(scaledY - currImage[2]));
        console.log(distance, "distance");
        setPoints(points + Math.floor(1000*(Math.SQRT2 - distance)/Math.SQRT2));
        setImageID(Math.floor(Math.random()*unseenImages.length));
        currImage = unseenImages[imageIndex];
    }
    return (
      <div>
        <div className={styles.QuitButton}>
        <QuitButton onClick={QuitGame} />
        </div>
        <div>
          <SubmitButton 
          onClick={submitPress}
          />
        </div>
        <ClickyMap
          ClickEvent={clickEvent}
          ImageTuple={currImage}
          ZoomedHeight={clickyMapMax}
          PlayerInput={playerSelect}
          Submitted={true}
        />
        <PointCounter
          points={points}
        />
      </div>
    );
  }