import {useSelector, useStore} from "react-redux";
import {showHeader} from "@/redux/actions/layout";
import {useEffect, useState, memo} from "react";
import {initializeStomp, send, deInitializedStomp} from '@/constant/chat/StompManager'
import {Input} from "@/views/chat/component/Input";
import {Bubble} from "@/views/chat/component/Bubble";
import {debounce} from 'lodash'
export const Chat = memo(() => {

    const init = debounce(async (store) => await initializeStomp(store), 300)
    const destroy = debounce( async () => await deInitializedStomp(), 300)
    useEffect( ()=> {
        ( () => {
            store.dispatch(showHeader(true))
            init(store)
        })()

        return () => {
            ( () => {
                destroy()
            })()
        }
    }, [])//chatEffect
    let store = useStore()
    const msg = useSelector(state => state.chat.list)


    return (
        <>
            <div className={"main"} role={"main"}>
                <div className={"container"}>
                        <div className={"chat_room"} id={"chat_box"}>
                            {msg.map((element, index) => <Bubble chat={ element } key={`msg_${index}`}/> )}
                        </div>
                        <Input />
                </div>
            </div>
        </>
    )
})

