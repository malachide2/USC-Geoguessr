import React from 'react';
import styles from "./submitbutton.module.css"; 


interface SubmitButtonProps {
    onClick: () => void;
    Submitted: boolean
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, Submitted }) => {
    return (
        <button onClick={onClick} className={styles.SubmitButton} style={{ display: Submitted ? 'none' : 'flex' }}>
            Submit
        </button>
    );
};

export default SubmitButton;