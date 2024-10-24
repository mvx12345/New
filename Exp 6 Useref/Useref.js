import React, { useRef } from 'react';

export default function Useref() {
    const inputRef = useRef(null);

    const focusInput = () => {
        // Focus the input element when the button is clicked
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder='Focus me' />
            <button onClick={focusInput}>Focus the Input</button>
        </div>
    );
}
