
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where,orderBy,limit } from "firebase/firestore";

import { useProductsContext } from "../../../hooks/useProductsContext/useProductsContext";
import { useClientContext } from "../../../hooks/useClientContext/useClientContext";






const useFirebaseClient = () => {

    const {client, setClient} = useClientContext();
    const {setErrorPromise}=useProductsContext();

     //Traer de la collection Clients los datos del cliente segun campo especificado.
     const getClient = async (field,data) => {
        const db = getFirestore();

        if(field==='email'){
          const q = query(collection(db, "clients"), where("email", "==", data)) 
        try{
            const snapshot = await getDocs(q);
            const client = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            client.length === 1 &&
            setClient(client[0]);
            setErrorPromise('');
        }catch(err){
                setErrorPromise('El cliente no existe...');
        }
        
                
        };  
    }


return {getClient, client}

}
export {useFirebaseClient}