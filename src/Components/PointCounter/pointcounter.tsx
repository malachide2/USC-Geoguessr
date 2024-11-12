import styles from "./pointcounter.module.css";

export default function PointCounter({ points=0 }: {points: number}) {
    return (
        <div>
            <main>
                <p className={styles.PointCounter}><span>{points}</span> Points</p>
            </main>
        </div>
    );
}