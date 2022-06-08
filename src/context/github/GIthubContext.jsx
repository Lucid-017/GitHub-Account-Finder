import {createContext,useReducer} from 'react'
import { useSearchParams } from 'react-router-dom'
import githubReducer from './GithubReducer'

const GIthubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_CODE

export const GithubProvider= ({children})=>{
    const initialState={
        users:[],
        /*now that the fetchUser() testing function is removed
        we dont want an endless display of the loading component
        so we will set it to false but initiate once again anytime 
        a fetch request is made*/
        loading:false
    }
    /* NOTE dispatch is very much like usestates's setstate scenario
    but for dispatch it is used to dispatch an action to our reducer*/
    const [state,dispatch] =useReducer(githubReducer,initialState)
   

    // Search users
    const searchUsers = async (text) =>{
        const params = new URLSearchParams({
            q:text,
        })
    setLoading()
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
        headers:{
            Authorization: `${GITHUB_TOKEN}`
        }
    })
    // we want to destructure the response object and get the items array
    const {items} = await response.json()
    
    // now we are dispatching the type get users and sending data as payload
    dispatch({
        type:"GET_USERS",
        payload:items
    })
}   
// set loading
    const setLoading =()=>{
        dispatch({
            type:"SET_LOADING"
        })
    }
// clear users
    const setClearUsers =()=>{
        dispatch({
            type:"CLEAR_USERS"
        })
    }

return <GIthubContext.Provider value={{
    users: state.users,
    loading:state.loading,
    searchUsers ,
    setClearUsers
}}>
    {children}
</GIthubContext.Provider>
}

export default GIthubContext