import {useState, useEffect} from 'react';
import { fetchBio } from './api.js';

export default function Page() {
    const [person, setPerson] = useState('Trong');
    const [bio, setBio] = useState('null');

    useEffect(() => {
        async function startFetching() {
            setBio(null);
            const result = await fetchBio(person);
            if(!ignore) {
                setBio(result);
            }
        }

        let ignore = false;
        startFetching();
        return () => {
            ignore = true;
        }
    }, [person])

    return (
        <>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Trong">Trong</option>
                <option value="Lam">Lam</option>
                <option value="Dat">Dat</option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}