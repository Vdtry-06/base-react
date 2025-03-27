import {useState} from 'react';
import CountLabel from './countLabel/CountLabel';

export default function LabelApp() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <CountLabel count={count}/>
        </>
    );
}