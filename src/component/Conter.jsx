import {useState, useEffect} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => count + 1); // cập nhật trạng thái
        }, 1000);
        return () => clearInterval(intervalId);
    }, []) // số lượng không phải dependency

    return <h1>{count}</h1>
}