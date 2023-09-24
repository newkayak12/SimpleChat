const reducers =  {
    append: (state, data) => {
        state.list = [...state.list, data.payload]
    },
}
export default reducers