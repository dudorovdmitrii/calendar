import { createSlice } from '@reduxjs/toolkit'

interface DateInterface {
    value: string
}

const initialState: DateInterface = {
    value: new Date().toDateString()
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.value = action.payload.date
        }
    },
})
export default dateSlice.reducer
export const { setDate } = dateSlice.actions
