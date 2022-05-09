import { useEffect,useState } from "react"

const UserResults = () => {
   const[users,setUsers]=useState([])
   const[loading,setLoading]=useState(true)

    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async () =>{
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,)
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }
    
    return loading?<h1>Loading..</h1>:(
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
           {users.map((user)=>(
               <p key={user.id}>{user.login}</p>
           ))} 
        </div>
    )
}

export default UserResults