import { useEffect } from "react";
import { useFirebaseClient } from "../../../services/hooks/useFirebase/useFirebaseClient";
import { useProductsContext } from "../../../hooks/useProductsContext/useProductsContext";
import { useNavigate } from "react-router-dom";


const FileUpload = () => {
    const { imgProfile, setImgProfile, uploadProfileImage } = useFirebaseClient();
    const { client, setClient, updateClient } = useFirebaseClient();
    const {errorPromise, setErrorPromise} = useProductsContext();
    const navigate=useNavigate();

    const handleUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const storageIn = '/img_user_profile/';
      
        try {
            await uploadProfileImage(file, storageIn);
            setErrorPromise('');
        } catch (err) {
            setErrorPromise('No se pudo Cargar la Imagen');
        }

    }

useEffect(()=>{
        const resp = updateClient(client);
        if (resp){
            setErrorPromise('');
            navigate('/userAccount');
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[client])

    useEffect(() => {
        imgProfile &&
        setClient((prev) => ({...prev, img: imgProfile }) );
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imgProfile])

    useEffect(()=>{
        setImgProfile('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            
            <input type="file" onChange={(e) => handleUpload(e)} />
            <p style={{color:'tomato'}}>{(errorPromise!=='' && imgProfile !== '') && errorPromise}</p>
            
        </div>)


}

export { FileUpload };