
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { db, storage } from "../../firebase/firebaseConfig";
import { useProductsContext } from "../../../hooks/useProductsContext/useProductsContext";
import { useClientContext } from "../../../hooks/useClientContext/useClientContext";
import { useState } from "react";






const useFirebaseClient = () => {

    const { client, setClient } = useClientContext();
    const { setErrorPromise } = useProductsContext();
    const [imgProfile, setImgProfile] = useState('');
    const [progressUpload, setProgressUpload] = useState(0);

    //Traer de la collection Clients los datos del cliente segun campo especificado.
    const getClient = async (field, data) => {
        

        if (field === 'email') {
            const q = query(collection(db, "clients"), where("email", "==", data))
            try {
                const snapshot = await getDocs(q);
                const client = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                client.length === 1 &&
                    setClient(client[0]);
                setErrorPromise('');
            } catch (err) {
                setErrorPromise('El Usuario no existe...');
            }


        };
    }

    const addClient = async (client) => {

        if (client.email) {
            const ordersColllection = collection(db, 'clients');
            try {
                await addDoc(ordersColllection, client);
                setErrorPromise('');
                return (true);
            } catch (err) {
                console.error('Error al guardar la Los Datos del Cliente', err);
                setErrorPromise('No se pudieron Guardar los datos del Usuario..');
                return (false)
            }
        }
    }

    const updateClient = async (client) => {
        /* const db = getFirestore(); */
        const q = query(collection(db, "clients"), where("email", "==", client.email));
        try {
            const querySnapshot = await getDocs(q);
            const cliente = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            const theClient = doc(db, 'clients', cliente[0].id)
            client?.img ? updateDoc(theClient, { ...client, img: client?.img }) : updateDoc(theClient,{...client});
            setErrorPromise('');
            return (true);

        } catch (err) {
            setErrorPromise('Error: No se pudo actualizar la información del usuario...');
            console.log(err);
            return (false);
        }

    }


    const uploadProfileImage = async (file, storageIn) => {
        const storageRef = ref(storage, `img_user_profile/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgressUpload((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload paused");
                        break;
                    case "running":
                        console.log("Upload running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                return (false);
            },
            async () => {
                try {
                    const downloadedURL = await getDownloadURL(uploadTask.snapshot.ref)
                    setImgProfile(downloadedURL);
                    setErrorPromise('');
                    return (true);
                } catch (err) {
                    setErrorPromise('Error: No se pudo obtener la Imagen...');
                    console.log(err.message);
                }

            }
        );
    };

    return { getClient, client, setClient, addClient, updateClient, imgProfile, setImgProfile, uploadProfileImage, progressUpload }

}
export { useFirebaseClient }