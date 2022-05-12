import {useContext } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";
import GIthubContext from "../../../context/github/GIthubContext";
const UserResults = () => {
    const{users, loading}= useContext(GIthubContext)
    
    return loading?<Spinner/>:(
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
           {users.map((user)=>(
               <UserItem key={user.id} user={user}/>
           ))} 
        </div>
    )
}

export default UserResults