import styles from "./roundcounter.module.css";

export default function PointCounter({ round }: {round: number}) {
    return (
        <div>
            <main>
                <p className={styles.RoundCounter}>Round <span>{round}</span></p>
            </main>
        </div>
    );
}