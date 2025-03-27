import {useState} from 'react';
import ModalDialog from './boxControl/ModalDialogs';

export default function ModalApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(true)}>
                Open dialog
            </button>
            <ModalDialog isOpen={show}>
                Hello there!
                <br/>
                <button onClick={() => setShow(false)}>
                    Close dialog
                </button>
            </ModalDialog>
        </>
    );
}