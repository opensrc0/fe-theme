import { MouseEventHandler } from "react"

export interface TextAreaProps{
    rows?:string
    placeholder?:string
    value:string
    onChange:MouseEventHandler<HTMLButtonElement>
}