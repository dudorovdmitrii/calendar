import { createSlice } from '@reduxjs/toolkit'

interface EventBlockInterface {
    date: string,
    hour: number
}

const initialState: EventBlockInterface = {
    date: '',
    hour: null
}

export const eventBlockSlice = createSlice({
    name: 'eventBlock',
    initialState,
    reducers: {
        setEventBlock: (state, action) => {
            state.date = action.payload.date
            state.hour = action.payload.hour
        }
    },
})
export default eventBlockSlice.reducer
export const { setEventBlock } = eventBlockSlice.actions
