import './button.css';

const Button = ({ label, onClick, type = 'button', className = '', disabled = false, color, image }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            disabled={disabled}
            style={color ? { backgroundColor: color } : undefined}
        >
            {image && (
                <img
                    src={image}
                    alt=""
                    style={{ width: '1.5rem', height: '1.5rem', marginRight: '1rem' }}
                />
            )}
            {label}
        </button>
    );
};

export default Button;