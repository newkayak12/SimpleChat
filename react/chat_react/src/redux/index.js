import { configureStore } from '@reduxjs/toolkit'
import layoutsReducer from "@/redux/type/layout";
export default configureStore({
    reducer: {
        layout: layoutsReducer
    },
})