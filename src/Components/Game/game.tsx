'use client'

import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import { useState, useEffect } from "react";
import styles from "./game.module.css";
import QuitButton from "../QuitButton/QuitButton";
import SubmitButton from "../SubmitButton/SubmitButton";
import NextButton from "../NextButton/nextbutton";
import RoundCounter from "../RoundCounter/roundcounter";
import { useRouter } from 'next/navigation';
import { images } from "./images";




export default function Game() {
  const router = useRouter();

  const [seenImages, setSeenImages] = useState<number[]>([]);
  const [points, setPoints] = useState(0);
  const [imageIndex, setImageID] = useState(Math.floor(Math.random()*images.length));
  const [submitted, setSubmitted] = useState(false);
  let [playerSelect, updatePlayerSelect] = useState([-1, -1]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [lastPoints, setLastPoints] = useState(-1);

  let currImage = images[imageIndex];
  const clickyMapMax = 350;


  const RandomizeImageIndex = () => {
    seenImages.push(imageIndex);
    let randomIndex = Math.floor(Math.random()*images.length);

    if (seenImages.length == images.length) { // If all images have been seen, reset the list
      setSeenImages([]);
      setImageID(randomIndex);
      return;
    }
    while (seenImages.includes(randomIndex)) { // Find a unique image
      randomIndex = Math.floor(Math.random()*images.length);
    }
    setSeenImages(seenImages);
    setImageID(randomIndex)
    return;
  }

  const clickEvent = (event: React.MouseEvent<HTMLImageElement>) => {
    if (submitted) return; //don't allow to change marker if submitted already
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
    setLastPoints(earnedPoints);
  }

  const nextPress = () => {
    setRoundNumber(roundNumber + 1);
    setSubmitted(false);
    RandomizeImageIndex();
    currImage = images[imageIndex];
    updatePlayerSelect([-1, -1]);
  }

  const QuitGame = () => {
    router.push('/');
  };

  return (
    <div>
      <ClickyMap
        ClickEvent={clickEvent}
        ImageTuple={currImage}
        ZoomedHeight={clickyMapMax}
        PlayerInput={playerSelect}
        Submitted={submitted}
        LastPoints={lastPoints}
      />
      <div className={styles.CommandConsole}>
        <RoundCounter round={roundNumber} />
        <div className={styles.Buttons}>
          <SubmitButton onClick={submitPress} Submitted={submitted} />
          <NextButton onClick={nextPress} />
          <QuitButton onClick={QuitGame} />
        </div>
      </div>
      <PointCounter points={points} />
    </div>
  );
}