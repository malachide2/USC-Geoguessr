import React from 'react';
import styles from "./button.module.css"; 


interface StartButtonProps {
    onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="startButton">
            Start!
        </button>
    );
};

export default StartButton;