import React, {useState, useEffect} from 'react';

const Notification = ({message}) => {
    const [isVisible, setIsVisible] = useState(false);

    const onClose = () => setIsVisible(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 5000);
            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [message]);
    

    return (
        <div
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
            style={{
                position: "fixed",
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#333',
                color: '#fff',
                padding: '16px',
                display: isVisible ? 'block' : 'none',
                opacity: isVisible ? 1 : 0,
                transition: 'visibility 0s, opacity 0.5s linear',
                zIndex: 1000,
            }}
        >
            {message}
            <button onClick={onClose} aria-label="Close notification message">&times;</button>
        </div>
    );
}

export default Notification;