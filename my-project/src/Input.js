// Input.js
import React, { useState } from 'react';

function Input({ onSend, onClear }) {
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        await onSend(inputValue);
        setIsLoading(false);
        setInputValue('');
    };

    return (
        <div className="flex justify-end py-4">
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mr-2"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button className="btn btn mr-2" onClick={handleClick}>
                {isLoading ? <span className="loading loading-dots loading-lg"></span> : 'Submit'}
            </button>
            <button className="btn btn-error" onClick={onClear}>Clear</button>
        </div>
    );
}

export default Input;