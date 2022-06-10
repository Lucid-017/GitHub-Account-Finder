const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_CODE

   // Search users
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
