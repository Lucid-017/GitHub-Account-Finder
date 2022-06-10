import {createContext,useReducer} from 'react'
import { useSearchParams } from 'react-router-dom'
import githubReducer from './GithubReducer'

const GIthubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_CODE

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
   

 

// we need a function that makes a request to gete a specific user
// then call an action in our reducer to add new user to the state
    // get single user
    const getUser = async (login) =>{
        
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${login}`,{
        headers:{
            Authorization: `${GITHUB_TOKEN}`
        }
    })
    // if the user doesnt exist
    if(response.status ===404){
        window.location = '/notfound'
    }else{
         const data = await response.json()
    
    // now we are dispatching the type get single user and sending data as payload
    dispatch({
        type:"GET_USER",
        payload:data,
    })
    }
    
}  
// we need a function that makes a request to get a specific user repo
// then call an action in our reducer to add new user to the state
    // get single user repo
    const getUserRepo = async (login) =>{
        
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`,{
        headers:{
            Authorization: `${GITHUB_TOKEN}`
        }
    })
         const data = await response.json()
         console.log(data)
    
    // now we are dispatching the type get single user and sending data as payload
    dispatch({
        type:"GET_USER_REPO",
        payload:data,
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
    ...state,
    dispatch,
    setClearUsers,
    getUser,
    getUserRepo,
}}>
    {children}
</GIthubContext.Provider>
}

export default GIthubContext