import React from 'react';
import styles from "./nextbutton.module.css"; 


interface NextButtonProps {
    onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.NextButton}>
            Next
        </button>
    );
};

export default NextButton;