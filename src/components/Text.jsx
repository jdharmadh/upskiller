import './text.css';

const Text = ({ content, className, style }) => {
    return <p className={className} style={style}>{content}</p>;
};


Text.defaultProps = {
    className: '',
    style: {},
};

export default Text;