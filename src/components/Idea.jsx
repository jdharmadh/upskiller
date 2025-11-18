import './idea.css';

const Idea = ({ build, deploy }) => {
    return (
        <div>
            <h2>Build</h2>
            <p>{build}</p>
            <h2>Deploy</h2>
            <p>{deploy}</p>
        </div>
    );
};

export default Idea;