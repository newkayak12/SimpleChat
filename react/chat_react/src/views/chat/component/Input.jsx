import {useState} from "react";
import {send} from "@/constant/chat/StompManager";

export const Input = () => {
    const [inputMsg, setInputMsg] = useState("")
    const sendMsg = () => {
        send(inputMsg)
        setInputMsg("")
    }
    const onChange = ({target}) => {
        setInputMsg(target.value)
    }

    return (
        <>
            <div className={"chat_input"}>
                <textarea value={inputMsg}
                          className={"input_area"}
                          onChange={onChange}
                >
                </textarea>
                <button onClick={sendMsg} className={"input_btn"}>전송</button>
            </div>
        </>
    )
}