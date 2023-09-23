const reducers =  {
    showHeader: (state, data) => {
        state.header = data.payload
    },
    showFooter: (state, data) => {
        state.footer = data.payload
    },
}
export default reducers