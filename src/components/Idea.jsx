import './idea.css';
import { useState } from 'react';
import Button from './Button';
import Prompt from './Prompt';


function resetIdea() {
    localStorage.removeItem("idea");
    window.location.reload();
}
const Idea = ({ build, deploy }) => {
    const [prompt, setPrompt] = useState({active: false, text: '', submit: '', cancel: ''});
    return (
        <div className='idea'>
                    <div 
                        style={{ 
                            filter: prompt.active ? 'blur(4px)' : 'none', 
                            opacity: prompt.active ? 0.5 : 1, 
                            transition: 'filter 0.3s ease-in-out, opacity 0.3s ease-in-out' 
                        }}
                    >
                <div style={{ paddingBottom: '16px' }}>
                    <h2>build it </h2>
                    <p className='idea-text' style={{ textAlign: 'left' }}>{build}</p>
                    <h2>ship it</h2>
                    <p className='idea-text' style={{ textAlign: 'left' }}>{deploy}</p>
                    <a 
                        href={`https://chat.openai.com/?q=${encodeURIComponent(build)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ display: 'block', marginTop: '16px', textDecoration: 'none' }}
                    >
                        <Button color="white" label="get specific ideas" image="./chatgpt-logo.png" />
                    </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '2em' }}>
                    <Button color="red" label="i give up" onClick={() => setPrompt({ text: 'why did you give up?', submit: 'i give up', cancel: 'still trying', active: true })} />
                    <Button color="green" label="i'm done!" onClick={() => setPrompt({ text: 'what did you accomplish?', submit: 'i\'m done', cancel: 'not yet', active: true })} />
                </div>
                </div>
                <div style={{ height: '24px' }}></div>
                <div 
                    style={{ 
                        opacity: prompt.active ? 1 : 0, 
                        transition: 'opacity 0.3s ease-in-out' 
                    }}
                >
                    <Prompt prompt={prompt.text} submitLabel={prompt.submit} cancelLabel={prompt.cancel} onSubmit={resetIdea} onCancel={() => setPrompt({ ...prompt, active: false })} />
                </div>
            </div>
    );
};

export default Idea;