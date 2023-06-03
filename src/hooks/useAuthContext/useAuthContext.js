import { useContext } from "react"
import { AuthContext } from "../../context/authContext";






const useAuthContext =()=>{

    const authContext = useContext(AuthContext);

    return(authContext)
}
export {useAuthContext}