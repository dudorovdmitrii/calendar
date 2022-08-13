import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface TiemtableProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string,
}

export interface OCCASIONS_COL_ROW_EVENT_PROPS extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    filled: boolean,
    chosen: boolean,
    className?: string,
    children?: any
}