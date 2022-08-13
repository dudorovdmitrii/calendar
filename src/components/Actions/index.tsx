import React from "react"

import { getFullMonth, getWeek } from "helpers"
import { millisecondsPerDay } from "settings"
import { useAppDispatch, useAppSelector } from "store"
import { setDate } from "store/slices/date"
import { createOrUpdateNotes } from "store/slices/notes"
import { setWeek } from "store/slices/week"

import { ArrowIconLeft, ArrowIconRight, MONTH, ACTIONS, WEEKDAY_LETTER, WEEKDAY_NUMBER, WEEK_DAY, WEEK_LIST } from "./Actions.styles"
import { ActionsProps } from "./ActionsProps"


export const Actions = ({ className }: ActionsProps): JSX.Element => {
    const date = useAppSelector(state => new Date(state.date.value))
    const week = useAppSelector(state => state.week.value)

    const dispatch = useAppDispatch()
    const handleChooseDay = (event: React.MouseEvent) => {
        const li = (event.target as HTMLElement).closest('li')
        dispatch(setDate({ date: week[li.dataset.index] }))
    }
    const handleChangeWeek = (event: React.MouseEvent) => {
        const arrow = (event.target as SVGElement).closest('div')
        const direction = arrow.dataset.direction
        if (direction === 'left') {
            const newWeek = getWeek(new Date(week[0]).getTime() - millisecondsPerDay * 7)
            dispatch(setWeek({ week: newWeek }))
            dispatch(createOrUpdateNotes({ week: newWeek }))
        }
        if (direction === 'right') {
            const newWeek = getWeek(new Date(week[0]).getTime() + millisecondsPerDay * 7)
            dispatch(setWeek({ week: newWeek }))
            dispatch(createOrUpdateNotes({ week: newWeek }))
        }
    }

    return (
        <ACTIONS className={className}>
            <WEEK_LIST>
                {
                    week.map(timestamp => new Date(timestamp)).map((day, index) =>
                        <WEEK_DAY data-index={index} key={day.toString()} onClick={handleChooseDay}>
                            <WEEKDAY_LETTER onClick={handleChooseDay}>
                                {day.toDateString()[0]}
                            </WEEKDAY_LETTER>
                            <WEEKDAY_NUMBER chosen={date.toDateString() === day.toDateString()} onClick={handleChooseDay}>
                                {day.getDate()}
                            </WEEKDAY_NUMBER>
                        </WEEK_DAY>)
                }
            </WEEK_LIST>
            <MONTH>
                <div data-direction="left" onClick={handleChangeWeek}>
                    <ArrowIconLeft />
                </div>
                {getFullMonth(new Date(week[0])) + ' ' + new Date(week[0]).getFullYear()}
                <div data-direction="right" onClick={handleChangeWeek}>
                    <ArrowIconRight />
                </div>
            </MONTH>
        </ACTIONS>
    )
}