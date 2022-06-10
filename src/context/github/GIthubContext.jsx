import {createContext,useReducer} from 'react'
import githubReducer from './GithubReducer'

const GIthubContext = createContext()

export const GithubProvider= ({children})=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        /*now that the fetchUser() testing function is removed
        we dont want an endless display of the loading component
        so we will set it to false but initiate once again anytime 
        a fetch request is made*/
        loading:false
    }
    /* NOTE dispatch is very much like usestates's setstate scenario
    but for dispatch it is used to dispatch an action to our reducer*/
    const [state,dispatch] =useReducer(githubReducer,initialState)
   
return <GIthubContext.Provider value={{
    ...state,
    dispatch,
}}>
    {children}
</GIthubContext.Provider>
}

export default GIthubContext