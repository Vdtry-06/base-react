import {useState, useRef} from 'react';
// đồng hồ bấm giờ
// 2 nút start và Stop 
export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null); // bộ đếm thời gian

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef); // hủy interval cũ nếu có

        intervalRef.current = setInterval(() => { // tạo mới interval mới
            setNow(Date.now());
        }, 10);
    }

    function handleStop() { // hàm dừng
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000; // tính dây đã qua
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}