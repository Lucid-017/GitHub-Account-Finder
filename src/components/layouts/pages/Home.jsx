import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"

const Home = () => {
  return (
    <>
        <UserSearch/>
        <UserResults/>
        {/* testing the environment variable */}
        {/* {process.env.REACT_APP_GITHUB_CODE} */}
        
    </>
  )
}

export default Home