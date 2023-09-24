import { createSlice } from '@reduxjs/toolkit'
import reducers from "@/redux/reducer/chat";

export const chat = createSlice({
    name: 'chat',
    initialState: {
     list:[]
    },
    reducers
})

// Action creators are generated for each case reducer function
export default chat.reducer