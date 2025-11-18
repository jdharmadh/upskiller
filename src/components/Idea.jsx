import './idea.css';
import Button from './Button';

const Idea = ({ build, deploy }) => {
    return (
        <div className='idea'>
            <div style={{ paddingBottom: '16px' }}>
                <h2>build: get an idea working </h2>
                <p style={{ textAlign: 'left' }}>{build}</p>
                <h2>deploy: test or launch a prototype</h2>
                <p style={{ textAlign: 'left' }}>{deploy}</p>
                <a 
                    href={`https://chat.openai.com/?q=${encodeURIComponent(build)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ display: 'block', marginTop: '16px', textDecoration: 'none' }}
                >
                    <Button color="white" label="Ask ChatGPT for help" image="./chatgpt-logo.png" />
                </a>
            </div>
                <Button color="red" label="start over" onClick={() => {
                    localStorage.removeItem("idea");
                    window.location.reload();
                }} />
                <Button color="green" label="i'm done" onClick={() => {
                    localStorage.removeItem("idea");
                    window.location.reload();
                }} />
        </div>
    );
};

export default Idea;