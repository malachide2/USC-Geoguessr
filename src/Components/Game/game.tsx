'use client'

import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import { useState } from "react";
import styles from "./game.module.css";
import QuitButton from "../QuitButton/quitbutton";
import SubmitButton from "../SubmitButton/submitbutton";
import NextButton from "../NextButton/nextbutton";
import { useRouter } from 'next/navigation';
import { images } from "./images";




let seenImages: number[] = [];
function GetNewImageIndex() {
  if (seenImages.length == images.length) { // If all images have been seen, reset the list
    seenImages = [];
  }

  let randomIndex = Math.floor(Math.random()*images.length);
  while (seenImages.includes(randomIndex)) { // Find a unique image
    randomIndex = Math.floor(Math.random()*images.length);
  }

  seenImages.push(randomIndex);
  return randomIndex;
}



export default function Game() {
  const router = useRouter();

  const QuitGame = () => {
    router.push('/');
  };

  const [points, setPoints] = useState(0);
  const [imageIndex, setImageID] = useState(GetNewImageIndex());
  const [submitted, setSubmitted] = useState(false);
  let currImage = images[imageIndex];
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
    setSubmitted(true);
    const scaledX = playerSelect[0];
    const scaledY = playerSelect[1];
    const distance = Math.sqrt((scaledX - currImage[1])*(scaledX - currImage[1]) + (scaledY - currImage[2])*(scaledY - currImage[2]));
    console.log(distance, "distance");
    // The earnedPoints equation is derived from 30 minutes of pure Desmos Willpower (it works really well)
    const earnedPoints = Math.floor(1000 / (Math.pow(1.05, distance * 100) - Math.sqrt(distance)));
    setPoints(points + earnedPoints);
  }

  const nextPress = () => {
    setSubmitted(false);
    setImageID(GetNewImageIndex());
    currImage = images[imageIndex];
    updatePlayerSelect([-1, -1]);
  }

  return (
    <div>
      <ClickyMap
        ClickEvent={clickEvent}
        ImageTuple={currImage}
        ZoomedHeight={clickyMapMax}
        PlayerInput={playerSelect}
        Submitted={submitted}
      />
      <div className={styles.CommandConsole}>
        <PointCounter points={points} />
        <div className={styles.Buttons}>
          <SubmitButton onClick={submitPress} Submitted={submitted} />
          <NextButton onClick={nextPress} />
          <QuitButton onClick={QuitGame} />
        </div>
      </div>
    </div>
  );
}