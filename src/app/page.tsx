import Image from "next/image";
import styles from "./page.module.css";
import ClickyMap from "../Components/ClickyMap/clickymap";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <ClickyMap/>
    </div>
  );
}
