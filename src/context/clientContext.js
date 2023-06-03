import { createContext, useState } from "react";


const ClientContext = createContext()


const ClientProvider = ({ children }) => {

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

        <ClientContext.Provider value={{client,setClient}}>
            {children}
        </ClientContext.Provider>

    )


}
export { ClientContext, ClientProvider }