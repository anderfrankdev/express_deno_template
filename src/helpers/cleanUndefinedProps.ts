import { curry, entries, pipe, reduce } from "npm:@fxts/core"
import { cleanUndefinedReducer } from "./cleanUndefineReducer.ts"

const clean =(entries)=>reduce(cleanUndefinedReducer,{},entries)

export const cleanUndefinedProps = ({title,notes,start,end})=>{

    return pipe(
        {title,notes,start,end},
        entries,
        clean,
        Object.freeze
    ) as any
}

