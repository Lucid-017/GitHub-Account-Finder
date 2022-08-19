import axios from "axios"
require('dotenv').config()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_CODE

// creating an instance of axious that we can use
const github = axios.create({
    baseURL: GITHUB_URL,
    headers:{Authorization: `${GITHUB_TOKEN}`}
})
   //SECTION Search users
   export const searchUsers = async (text) =>{
    const params = new URLSearchParams({
        q:text,
    })

    const response = await github.get(`/search/users?${params}`)
// with axios we no longer need to await the response

    return response.data.items
}  

// getuser and repos
export const getuserAndRepos = async(login)=>{
    // we are making a call for two functions to get the user and repo
    // we can use Promise.all which takes in an array of request
    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    // since we dont have to wait for a response
    // we can go ahead and deconstruct the user and repo object and get their data
    return {user : user.data,repos:repos.data}
}