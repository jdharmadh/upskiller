import './idea.css';
import { useState } from 'react';
import Button from './Button';
import Prompt from './Prompt';


function generateChatGPTPrompt(build, deploy) {
    return `Help me generate specific project ideas for this project:

Build Goal: ${build}

Deployment/Ship Goal: ${deploy}

Generate unique and specific suggestions that have real-world use and impact.`;
}

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
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <a 
                            href={`https://chat.openai.com/?q=${encodeURIComponent(generateChatGPTPrompt(build, deploy))}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: 'none' }}
                        >
                            <Button color="rgb(206, 205, 195)" label="i'm stuck on what to build" image="./chatgpt-logo.png" />
                        </a>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '2em' }}>
                            <Button color="rgb(175, 48, 41)" label="i give up" onClick={() => setPrompt({ text: 'why did you give up?', submit: 'i give up', cancel: 'still trying', active: true })} />
                            <Button color="rgb(102, 128, 11)" label="i'm done!" onClick={() => setPrompt({ text: 'what did you accomplish?', submit: 'i\'m done', cancel: 'not yet', active: true })} />
                        </div>
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