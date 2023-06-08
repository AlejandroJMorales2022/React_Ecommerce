import { useEffect, useState } from 'react'
import './FormUserProfile.css'
import { useFirebaseClient } from '../../../services/hooks/useFirebase/useFirebaseClient';
import { useProductsContext } from '../../../hooks/useProductsContext/useProductsContext';

const FormUserProfile = () => {

    const { updateClient, client } = useFirebaseClient();
    const { errorPromise, setErrorPromise,setPageIndex } = useProductsContext();
    const {getClient}= useFirebaseClient();
    const [updatedClient, setUpdatedClient] = useState(client);
    const [residence, setResidence] = useState({
        street: client.residence.street,
        number: client.residence.number,
        city: client.residence.city,
        state: client.residence.state
    });

    const handleChenge = ({ target: { name, value } }) => {


        setUpdatedClient({ ...updatedClient, [name]: value })
    }

    const handleChangeResidence = ({ target: { name, value } }) => {
        setResidence({ ...residence, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await updateClient(updatedClient);
            if (resp) {
                setErrorPromise('');
                setPageIndex('userAccountPerfil')
                getClient('email', updatedClient.email)
            }

        } catch (err) {
            console.log(err);
            setErrorPromise('No se pudieron actualizar los Datos...')
        }
    }

    const setDataForm = () => {
        document.getElementById('name').value = client.name;
        document.getElementById('dni').value = client.dni;
        document.getElementById('phone').value = client.phone;
        document.getElementById('street').value = client.residence.street;
        document.getElementById('number').value = client.residence.number;
        document.getElementById('city').value = client.residence.city;
        document.getElementById('state').value = client.residence.state;
        document.getElementById('obs').value = client.obs;
    }

    useEffect(() => {
        setUpdatedClient({ ...updatedClient, residence: residence })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [residence])

    useEffect(() => {
        setDataForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='UserEditProfileContainer'>
            <h5 className='pt-2 pb-3'>Edición de Perfil de Usuario</h5>
            {errorPromise!=='' && <p className='pt-2 pb-2' style={{color:'tomato'}}>{errorPromise}</p> }
            <form className="bg-white rounded mb-4" onSubmit={handleOnSubmit}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12">
                        <label htmlFor="name" className="d-block text-dark text-sm font-bold mb-2 me-3">Nombre</label>
                        <input onChange={handleChenge} type="text" name="name" id="name" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="dni" className="d-block text-dark text-sm font-bold mb-2 me-3">DNI</label>
                        <input onChange={handleChenge} type="text" name="dni" id="dni" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="phone" className="d-block text-dark text-sm font-bold mb-2 me-3">Teléfono</label>
                        <input onChange={handleChenge} type="text" name="phone" id="phone" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                </div>
                <div className="container bg-secondary d-flex justify-content-center text-white mt-3 p-0 rounded shadow w-75">
                    <div className="col-12">Domicilio</div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-8">
                        <label htmlFor="street" className="d-block text-dark text-sm font-bold mb-2 me-3">Calle</label>
                        <input onChange={handleChangeResidence} type="text" name="street" id="street" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="number" className="d-block text-dark text-sm font-bold mb-2 me-3">Número</label>
                        <input onChange={handleChangeResidence} type="text" name="number" id="number" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="city" className="d-block text-dark text-sm font-bold mb-2 me-3">Ciudad</label>
                        <input typ onChange={handleChangeResidence} e="text" name="city" id="city" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="state" className="d-block text-dark text-sm font-bold mb-2 me-3">Provincia</label>
                        <input onChange={handleChangeResidence} type="text" name="state" id="state" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="obs" className="d-block text-dark text-sm font-bold mb-2 me-3">Observaciones</label>
                        <input onChange={handleChenge} type="textarea" name="obs" id="obs" className="shadow border rounded py-2 px-3 text-dark w-100" autoComplete="off" />
                    </div>
                </div>
                <button className="text-white py-2 px-4 rounded shadow btn btn-secondary w-50 mt-5" >Guardar Cambios</button>
            </form>
        </div>
    )

}
export { FormUserProfile }