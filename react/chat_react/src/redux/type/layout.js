import { createSlice } from '@reduxjs/toolkit'
import reducers from "@/redux/reducer/layout";

export const layouts = createSlice({
    name: 'layouts',
    initialState: {
        value: 0,
    },
    reducers
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = layouts.actions
export default layouts.reducer