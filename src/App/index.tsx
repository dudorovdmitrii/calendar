import React, { useEffect } from 'react'

import { Actions } from 'components/Actions'
import { Timetable } from 'components/Timetable'
import { getFullMonth, getWeek } from 'helpers'
import { useAppDispatch, useAppSelector } from 'store'
import { setWeek } from 'store/slices/week'
import { headerText } from './settings'
import { deleteNote, updateNote } from 'store/slices/notes'
import { setEventBlock } from 'store/slices/eventBlock'

import {
  HEADER, MAIN, PlusIcon, LAYOUT, FOOTER, FOOTER_BUTTON
} from './App.styles'

export function App(): JSX.Element {
  const eventBlock = useAppSelector(state => state.eventBlock)
  const date = useAppSelector(state => new Date(state.date.value))

  const dispatch = useAppDispatch()
  const getFooterText = () => {
    return date.toDateString() === (new Date()).toDateString() ? "Today" : getFullMonth(date) + ' ' + date.getDate()
  }
  const handleAddNote = () => {
    const message = prompt('Enter event time: \nYYYY-MM-DD HH:mm:ss', '')
    const date = new Date(message)
    if (+date) dispatch(updateNote({ date: date.toDateString(), hour: date.getHours() }))
  }
  const handleDeleteNote = () => {
    dispatch(deleteNote({ date: eventBlock.date, hour: eventBlock.hour }))
    dispatch(setEventBlock({ date: '', hour: null }))
  }

  useEffect(() => {
    dispatch(setWeek({ week: getWeek(new Date().getTime()) }))
  }, [])

  return (
    <LAYOUT>
      <HEADER>
        {headerText}
        <PlusIcon onClick={handleAddNote} />
      </HEADER>
      <MAIN>
        <Actions />
        <Timetable />
      </MAIN>
      <FOOTER>
        <div>{getFooterText()}</div>
        <FOOTER_BUTTON active={eventBlock.date && eventBlock.hour !== null} onClick={handleDeleteNote}>Delete</FOOTER_BUTTON>
      </FOOTER>
    </LAYOUT>
  )
}

