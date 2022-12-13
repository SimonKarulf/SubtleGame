import {useEffect, useState} from "react";

export const Loader = ({
    messages,
    callback
}) => {
    // Default to the first message passed
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        // Move on to the next message every `n` milliseconds
        let timeout;
        if (messageIndex < messages.length - 1) {
            timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 500);
        }
        if (messageIndex === messages.length - 1) {
            callback(false)
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [messages, messageIndex]);

    return <div className="combat-content">{messages[messageIndex]}</div>;
};