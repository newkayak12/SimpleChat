import {useSelector, useStore} from "react-redux";
import {showHeader} from "@/redux/actions/layout";
import {append} from "@/redux/actions/chat";
// import {
//     initializeStomp,
//     deInitializedStomp,
//     send,
// } from '@/constant/chat/stomp'
import {useEffect} from "react";

export const Chat = () => {
    let store = useStore()

    useEffect( ()=> {
        store.dispatch(showHeader(true))
    }, [])


    const test = useSelector(state => state.chat.list)
    const testMethod = (item) => store.dispatch(append(item))

    return (
        <>
            <div className={"main"} role={"main"}>
                <div className={"container"}>
                 <button onClick={()=>testMethod(Math.random())}>TEST</button>
                    {test.map((elem,index )=> <p key={index}>{elem}</p>)}
                </div>
            </div>
        </>
    )
}

