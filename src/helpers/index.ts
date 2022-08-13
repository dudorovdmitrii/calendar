import { millisecondsPerDay } from "settings"

export const getFullMonth = (date: Date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[date.getMonth()]
}

export const getWeek = (timestamp: number) => {
    const date = new Date(timestamp)
    const week = new Array(7)
    let weekOrder = date.getDay() - 1
    for (let i = 0; i < 7; i++) {
        week[i] = new Date(date.getTime() - millisecondsPerDay * weekOrder).toDateString()
        weekOrder--
    }
    return week
}