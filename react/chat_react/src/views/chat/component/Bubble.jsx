import {memo} from "react";

export const Bubble = memo( (chat ) => {
    const {msg, type} = chat
    const renderBubble = () => {
        if( type === "MESSAGE") {
            return <div className={"message"}></div>
        } else {
            return <div className={"notice"}></div>
        }
    }

    return (
        <>
            {renderBubble()}
        </>
    )
})