const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_CODE

   //SECTION Search users
   export const searchUsers = async (text) =>{
    const params = new URLSearchParams({
        q:text,
    })

const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
    headers:{
        Authorization: `${GITHUB_TOKEN}`
    }
})
// we want to destructure the response object and get the items array
const {items} = await response.json()

// now we are dispatching the type get users and sending data as payload
return items
}  

// we need a function that makes a request to gete a specific user
// then call an action in our reducer to add new user to the state
    //SECTION get single user
  export  const getUser = async (login) =>{
        
    
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
        return data
        }
        
    }  
    // we need a function that makes a request to get a specific user repo
    // then call an action in our reducer to add new user to the state
        //SECTION  get single user repo
       export const getUserRepo = async (login) =>{
            
        
        const params = new URLSearchParams({
            sort:'created',
            per_page:10,
        })
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
            headers:{
                Authorization: `${GITHUB_TOKEN}`
            }
        })
             const data = await response.json()
        
        return data
        
        
    }  
