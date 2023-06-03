import { useContext } from "react"
import { ClientContext } from "../../context/clientContext"

const useClientContext = () =>{

    const clientContext= useContext(ClientContext)

    return (clientContext)
}

export {useClientContext}
