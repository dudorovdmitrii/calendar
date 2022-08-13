import { createSlice } from '@reduxjs/toolkit'

interface WeekInterface {
    value: string[]
}

const initialState: WeekInterface = {
    value: []
}

export const weekSlice = createSlice({
    name: 'week',
    initialState,
    reducers: {
        setWeek: (state, action) => {
            state.value = action.payload.week
        }
    },
})
export default weekSlice.reducer
export const { setWeek } = weekSlice.actions
