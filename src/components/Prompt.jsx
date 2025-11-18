import React, { useState } from 'react';
import Button from './Button';

const Prompt = ({ prompt, onSubmit, onCancel, submitLabel = "submit", cancelLabel = "cancel" }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(input);
        }
        setInput('');
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
        setInput('');
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <div
                style={{
                    padding: '0px 0px',
                    borderRadius: '10px',
                    color: '#ddd',
                    marginBottom: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                }}
            >
                {prompt}
            </div>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                    width: '100%',
                    height: '100px',
                    borderRadius: '16px',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #333',
                    resize: 'none',
                    color: '#ddd',
                    backgroundColor: 'rgb(28, 27, 26)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                }}
                placeholder="reflect a bit..."
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    label={cancelLabel}
                    onClick={handleCancel}
                    color="rgb(135, 133, 128)"
                />
                <Button
                    label={submitLabel}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default Prompt;