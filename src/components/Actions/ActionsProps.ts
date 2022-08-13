import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface ActionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string,
}

export interface WEEKDAY_NUMBER_PROPS extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    chosen: boolean,
    className?: string,
    children?: any
}