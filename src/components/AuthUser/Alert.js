
const Alert = ({message})=>{
    return(
        <div className="bg-red-100 border border-red-400 text-red-900 px-4 py-3 rounded relative mb-2 text-center ">
            <span className="text-danger ">{message}</span>
        </div>
        )
}
export default Alert