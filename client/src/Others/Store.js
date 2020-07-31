import React, {createContext, useContext, useReducer } from 'react'
import AsyncDispatch from './AsyncDispatch'
import * as api from './Api'

const initialState = {
    loading : false,
    data : [],
    error : null
}

function reducer (state, action) {
    switch(action.type) {
        case "LOADING" : 
            return {
                loading : true,
                data : [],
                error : null
            }
        case "SUCCESS" : 
            return {
                loading : false,
                data : action.data,
                error : null
            }
        default:
            new Error(`Not Supprted Action`)
    }
}

const stateContext = createContext(null)
const dispatchContext = createContext(null)

const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <stateContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                {children}
            </dispatchContext.Provider>
        </stateContext.Provider>
    )
}

export function useDataState() {
    const state = useContext(stateContext);
    if(!state) {
        throw new Error('state not found')
    } 
    return state;
}

export function useDataDispatch() {
    const dispatch = useContext(dispatchContext);
    if(!dispatch) {
        throw new Error('dispatch not found')
    }
    return dispatch;
}

export const getPhotoList = AsyncDispatch(api.GET_PHOTO_LIST);

export default Store