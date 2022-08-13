import { createSlice } from '@reduxjs/toolkit'
import { NumberOfHours } from 'settings'

interface NotesInterface {
    value: Record<string, string[]>
}

const initialState: NotesInterface = {
    value: {}
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createOrUpdateNotes: (state, action) => {
            for (const day of action.payload.week) {
                if (!state.value[day]) state.value[day] = new Array(NumberOfHours).fill('')
            }
        },
        updateNote: (state, action) => {
            const day = action.payload.date, hour = action.payload.hour
            if (!state.value[day]) state.value[day] = Array.from({ length: NumberOfHours }, (val, i) => i === hour ? "event" : "")
            else state.value[day][hour] = "event"
        },
        deleteNote: (state, action) => {
            const day = action.payload.date, hour = action.payload.hour
            state.value[day][hour] = ""
        }
    },
})
export default notesSlice.reducer
export const { createOrUpdateNotes, updateNote, deleteNote } = notesSlice.actions
