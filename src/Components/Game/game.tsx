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
    ["aidt.jpg", 0.2, 0.5],
    ["debrah.jpg", 0, 1],
    ["johs.jpg", 1, 0],
    ["joyec.jpg", 1, 1],
    ["valria.jpg", 0.5, 0.5]];
  
  const router = useRouter();

  const QuitGame = () => {
    router.push('/');
  };
  
  
    const [points, setPoints] = useState(0);
    let randomIndex = Math.floor(Math.random() * unseenImages.length)
    const [imageIndex, setImageID] = useState(randomIndex);
    const currImage = unseenImages[imageIndex];
    const clickyMapMax = 350;
    let [playerSelect, updatePlayerSelect] = useState([50, 50]);
    const clickEvent = (event: React.MouseEvent<HTMLImageElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;
        const scaledX = offsetX/clickyMapMax;
        const scaledY = offsetY/clickyMapMax;
        const distance = Math.sqrt((scaledX - currImage[1])*(scaledX - currImage[1]) + (scaledY - currImage[2])*(scaledY - currImage[2]))
        console.log(`${offsetX} ${offsetY}`);
        console.log(`${scaledX} ${scaledY}`);
        console.log(`${distance}`);
        setPoints(Math.floor(1000*(Math.SQRT2 - distance)/Math.SQRT2));
        updatePlayerSelect([scaledX, scaledY]);
        console.log(playerSelect, "player select");
      }
    return (
      <div>
        <div className={styles.QuitButton}>
        <QuitButton onClick={QuitGame} />
        </div>
        <div>
          <SubmitButton />
        </div>
        <ClickyMap
          ClickEvent={clickEvent}
          ImageTuple={currImage}
          ZoomedHeight={clickyMapMax}
          PlayerInput={playerSelect}
        />
        <PointCounter
          points={points}
        />
      </div>
    );
  }