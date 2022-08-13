import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FOOTER_BUTTON_PROPS extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    children?: any,
    active: boolean
}