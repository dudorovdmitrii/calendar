import React, { useEffect } from "react"

import { NumberOfHours } from "settings"
import { useAppDispatch, useAppSelector } from "store"
import { setEventBlock } from "store/slices/eventBlock"
import { createOrUpdateNotes } from "store/slices/notes"

import { OCCASIONS, OCCASIONS_COL, OCCASIONS_COL_ROW, OCCASIONS_COL_ROW_EVENT, TIME, TIMETABLE, TIME_ROW } from "./Timetable.styles"
import { TiemtableProps } from "./TimetableProps"


export const Timetable = ({ className }: TiemtableProps): JSX.Element => {
    const chosenBlock = useAppSelector(state => state.eventBlock)
    const notes = useAppSelector(state => state.notes.value)
    const week = useAppSelector(state => state.week.value)

    const dispatch = useAppDispatch()
    const getHour = (hour: number) => {
        if (hour < 10) return '0' + hour + ':00'
        return hour + ':00'
    }
    const handleChooseHour = (event: React.MouseEvent) => {
        const noteBlock = (event.target as HTMLElement).closest('div[data-date]') as HTMLDivElement
        const date = noteBlock.dataset.date, hour = parseInt(noteBlock.dataset.hour)
        if (notes[date][hour]) dispatch(setEventBlock({ date: date, hour: hour }))
        else dispatch(setEventBlock({ date: null, hour: null }))
    }

    useEffect(() => {
        dispatch(createOrUpdateNotes({ week: week }))
    }, [week])

    if (!notes[week[0]]) return <></>
    return (
        <TIMETABLE className={className}>
            <TIME>
                {
                    new Array(NumberOfHours).fill(null).map((val, row) => (
                        <TIME_ROW key={getHour(row)}>
                            {getHour(row)}
                        </TIME_ROW>))
                }
            </TIME>
            <OCCASIONS>
                {
                    week.map((currentDate, dateIndex) => (
                        <OCCASIONS_COL key={currentDate}>
                            {
                                notes[currentDate].map((currentNote: string, currentHour: number) => (
                                    <OCCASIONS_COL_ROW key={currentHour} data-date={currentDate} data-hour={currentHour} onClick={handleChooseHour}>
                                        <OCCASIONS_COL_ROW_EVENT
                                            filled={currentNote ? true : false}
                                            chosen={chosenBlock.date === currentDate && chosenBlock.hour === currentHour}>
                                        </OCCASIONS_COL_ROW_EVENT>
                                    </OCCASIONS_COL_ROW>))
                            }
                        </OCCASIONS_COL>))
                }
            </OCCASIONS>
        </TIMETABLE>
    )
}
Timetable.displayName = "Timetable"