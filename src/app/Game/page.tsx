import React from 'react'
import Image from "next/image";
import styles from "./Game.module.css";
import Game from "@/Components/Game/game";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div>
        <Game/>
      </div>
      </main>
    </div>
  );
}