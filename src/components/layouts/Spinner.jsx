import Load from "./assets/Loading.gif"

const Spinner = ()=>{
    return(
        <div className="w-100 mt-20">
            <img className="text-center mx-auto" width={100} src={Load} alt={<h1>Loading...</h1>} />
        </div>
    )
}
export default Spinner
