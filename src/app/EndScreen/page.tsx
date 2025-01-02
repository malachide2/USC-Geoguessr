"use client";
import React from 'react'
import Image from "next/image";
import styles from "./endscreen.module.css";
import Game from "@/Components/Game/game";
import PlayAgainButton from '@/Components/PlayAgainButton/playagainbutton';
import { useRouter } from 'next/navigation';

export default function EndScreen() {
  const router = useRouter();
 // const searchParams = useSearchParams();
 // const score = searchParams.get("score");

  const startGame = () => {
    router.push('/Game');
  };
  return (
    <div className={styles.page}>
      <div >
        <h1 className={styles.title}>Final Score: <span className={styles.points}>{sessionStorage.getItem('score')}</span></h1>
        <h2 className={styles.subtitle}>Rounds Played: <span className={styles.points}>{sessionStorage.getItem('rounds')}</span></h2>
        <PlayAgainButton onClick={startGame}/>
      </div>
    </div>
  );
}