import {useSelector, useStore} from "react-redux";
import {showHeader} from "@/redux/actions/layout";
import {useEffect, useState, memo} from "react";
import {initializeStomp, send, deInitializedStomp} from '@/constant/chat/StompManager'
import {Input} from "@/views/chat/component/Input";
import {Bubble} from "@/views/chat/component/Bubble";
export const Chat = memo(() => {

    useEffect( ()=> {
        (async () => {
            store.dispatch(showHeader(true))
            await initializeStomp(store)
        })()

        return () => {
            (async () => {
                await deInitializedStomp()
            })()
        }
    }, [])//chatEffect
    let store = useStore()
    const msg = useSelector(state => state.chat.list)


    return (
        <>
            <div className={"main"} role={"main"}>
                <div className={"container"}>
                        <div className={"chat_room"}>
                            {msg.map((element, index) => <Bubble chat={ element } key={`msg_${index}`}/> )}
                        </div>
                        <Input />
                </div>
            </div>
        </>
    )
})

