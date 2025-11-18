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
                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                />
            )}
            {label}
        </button>
    );
};

export default Button;