import { createContext, useState } from "react";


const ClientContext = createContext()


const ClientProvider = ({ children }) => {

    const [editImg, setEditImg]=useState(false);
    const [client, setClient] = useState({
        dni: '',
        email: '',
        name: '',
        phone: '',
        obs: '',
        residence: {
            city: '',
            number: '',
            street: '',
            state: ''
        }
    });



    return (

        <ClientContext.Provider value={{client,setClient,editImg, setEditImg}}>
            {children}
        </ClientContext.Provider>

    )


}
export { ClientContext, ClientProvider }