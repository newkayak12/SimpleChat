import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {chatMiddleware} from "@/redux/middleware/chat";
import layout from "@/redux/type/layout";
import chat from '@/redux/type/chat'

export default configureStore({
    reducer: {
        layout,
        chat
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatMiddleware)
})