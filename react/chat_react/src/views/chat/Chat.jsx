import {useStore} from "react-redux";
import {showHeader} from "@/redux/type/layout";
import {useEffect} from "react";

export const Chat = () => {

    const store = useStore()
    useEffect(()=> {
        store.dispatch(showHeader(true))
    })


    return (
        <></>
    )
}

