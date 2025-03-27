import {useRef} from 'react';

export default function FormFocus() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus(); // truy cập DOM focus gọi để di chuyển con trỏ vào input
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}