import React, {createContext, useReducer} from "react"


export const DataContext  = createContext()

export const Dataprovider = ({children, reducer, initialState})=>{
    return (
        <DataContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
        </DataContext.Provider>

    )
}
