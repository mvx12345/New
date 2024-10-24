import React, { useState } from 'react';
import ChildComponent from './ChildComponent';  // Importing child component

function App() {
    // Initializing state using the useState hook
    const [message, setMessage] = useState("Hello from Parent!");

    const updateMessage = () => {
        setMessage("Updated by Parent!");
    };

    return (
        <div className="App">
            <h1>React Props and State Example</h1>
            {/* Passing state as props to the child */}
            <ChildComponent message={message} />
            {/* Button to update the state */}
            <button onClick={updateMessage}>Update Message</button>
        </div>
    );
}

export default App;
