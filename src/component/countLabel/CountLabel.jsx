import {useState} from 'react';

export default function CountLabel({count}) {
    const [preCount, setPreCount] = useState(count);
    const [trend, setTrend] = useState(null);

    if(preCount != count) {
        setPreCount(count);
        setTrend(count > preCount ? 'Increasing' : 'Descreasing');
    }

    return (
        <>
            <h1>{count}</h1>
            {trend && <p>The count is {trend}</p>}
        </>
    );
}