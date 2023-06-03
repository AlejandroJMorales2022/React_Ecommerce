import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext";



const ProtectedRoute = ({children})=>{

    const {user,loading} = useAuthContext();

    if (loading) return <h1>Loading...</h1>

    if (!user) return <Navigate to='/login' />

    return(
        <>
            {children}
        </>
        
    )
}
export default ProtectedRoute