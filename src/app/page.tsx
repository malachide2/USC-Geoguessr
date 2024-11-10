import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import Game from "@/Components/Game/game";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div /*className='background-image'*/>
        <h1 className={styles.title}>USC Geoguessr</h1>
        <Game/>
      </div>
      </main>
    </div>
  );
}


