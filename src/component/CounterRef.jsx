import {useRef} from 'react';
// theo dõi số lần nhấn nút được nhấp.
export default function Counter() {
    let ref = useRef(0);

    function handleClick() {
        ref.current += 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}