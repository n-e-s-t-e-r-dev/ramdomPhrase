import React, { useState } from 'react';

const Counter = () => {

    const [counter,setCount] = useState("0")
    return (
        <div>
            <h1>{Counter}</h1>
            <button>siguiente</button>
        </div>
    );
};

export default Counter;