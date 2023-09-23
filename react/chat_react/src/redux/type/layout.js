import { createSlice } from '@reduxjs/toolkit'
import reducers from "@/redux/reducer/layout";

export const layouts = createSlice({
    name: 'layout',
    initialState: {
        header:true,
        footer:true
    },
    reducers
})

// Action creators are generated for each case reducer function
export const { showHeader, showFooter } = layouts.actions
export default layouts.reducer