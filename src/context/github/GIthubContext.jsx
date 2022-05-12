import {createContext,useReducer} from 'react'
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

    // get initial users (testing purposes)
    const fetchUsers = async () =>{
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`,)
    const data = await response.json()
    
    // now we are dispatching the type get users and sending data as payload
    dispatch({
        type:"GET_USERS",
        payload:data
    })
}   
// set loading
    const setLoading =()=>{
        dispatch({
            type:"SET_LOADING"
        })
    }

return <GIthubContext.Provider value={{
    users: state.users,
    loading:state.loading,
    fetchUsers
}}>
    {children}
</GIthubContext.Provider>
}

export default GIthubContext