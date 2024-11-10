import React from 'react';
import styles from "./SubmitButton.module.css"; 


interface SubmitButtonProps {
    onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.SubmitButton}>
            Submit
        </button>
    );
};

export default SubmitButton;