import React from 'react';
import './style.css'; // Optional: Add styles for the button

const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;