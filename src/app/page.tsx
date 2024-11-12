"use client";
import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import Game from "@/Components/Game/game";
import StartButton from '@/Components/StartButton/startbutton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const startGame = () => {
    router.push('/Game');
  };
  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
      <div >
        
        <h1 className={styles.title}>USC Geoguessr</h1>
           <StartButton onClick={startGame}/>
      </div>
      </main>
    </div>
  );
}