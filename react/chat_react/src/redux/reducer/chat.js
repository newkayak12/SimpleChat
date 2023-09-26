const reducers =  {
    setUUID: (state, data) => {
      state.UUID = data.payload
    },
    append: (state, data) => {
        state.list = [...state.list, data.payload]
    },
}
export default reducers