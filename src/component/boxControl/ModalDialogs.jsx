import {useEffect, useRef} from 'react';

export default function ModalDialogs({isOpen, children}) {
    const ref = useRef();  // ref.current =  undefined
    useEffect(() => {
        if(!isOpen) {
            return;
        }
        const dialog = ref.current; // component render
        dialog.showModal(); // hiển thị dialog
        return () => {
            dialog.close(); // cleanup
        };
    }, [isOpen]);

    return <dialog ref={ref}>{children}</dialog>
}