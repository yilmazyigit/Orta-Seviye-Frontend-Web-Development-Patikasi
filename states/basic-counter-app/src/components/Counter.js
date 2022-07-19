import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increase = () => {
        setCount(count+1);
    };

    const decrease = () => {
        setCount(count-1);
    };

    const reset = () => {
        setCount(0);
    }

    return <div>
        <h1 style={{ color: "red" }}>{count}</h1>
        
        <button onClick={decrease}>Decrease</button>&nbsp;&nbsp;&nbsp;
        <button onClick={increase}>Increase</button>&nbsp;&nbsp;&nbsp;
        <button onClick={reset}>Reset</button>
    </div>;
}

export default Counter;
