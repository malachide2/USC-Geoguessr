import React from 'react';
import styles from "./playagainbutton.module.css"; 


interface PlayAgainButtonProps {
    onClick: () => void;
}

const PlayAgainButton: React.FC<PlayAgainButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.playAgainButton}>
            Play Again!
        </button>
    );
};

export default PlayAgainButton;