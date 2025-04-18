import {useState, useEffect} from 'react';
import createConnection from './Chat';


export default function ChatRoom({roomId}) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return (
        <>
            <label>
                Server URL: {' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>Wellcome to the {roomId} room!</h1>
        </>
    );
}