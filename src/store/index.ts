import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import dateSlice from './slices/date'
import eventBlockSlice from './slices/eventBlock'
import notesSlice from './slices/notes'
import weekSlice from './slices/week'

export const store = configureStore({
    reducer: {
        notes: notesSlice,
        date: dateSlice,
        week: weekSlice,
        eventBlock: eventBlockSlice
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector