import React from 'react';
import styles from "./quitbutton.module.css"; 


interface QuitButtonProps {
    onClick: () => void;
}

const QuitButton: React.FC<QuitButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.QuitButton}>
            Exit
        </button>
    );
};

export default QuitButton;