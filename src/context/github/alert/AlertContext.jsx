import { createContext,useReducer } from "react";
import alertReducer from "../alert/AlertReducer"

const AlertContext = createContext()

export const AlertContextProvider =({children})=>{
    const initialState =null
    //  the useREducer takes in two arguements(the reducer u want to use and the initial state)
    const [state,dispatch]= useReducer(alertReducer,initialState)
// using reducers to create an alert component
    const setAlert =(msg,type)=>{
        dispatch({
            type:"SET_ALERT",
            payload:{msg,type}
        })
        setTimeout(() =>dispatch( {
            type:'REMOVE_ALERT'
        }), 3000);
    }
    return <AlertContext.Provider value={{
        alert :state,
        setAlert
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext