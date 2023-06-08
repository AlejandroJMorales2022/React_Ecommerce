import { useEffect, useState } from "react"
import Alert from "./Alert"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext"
import './Auth.css'
import imgUser from '../../assets/img/icons/add-user.png'
import { useFirebaseClient } from "../../services/hooks/useFirebase/useFirebaseClient"
import { useAuxFunctions } from "../../hooks/useAuxFunctions/useAuxFunctions"
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext"



const Register = () => {

    const { signUp, error, setError, login } = useAuthContext();
    const {setPageIndex, page} = useProductsContext();
    const navigate = useNavigate();
    const { validateEmailFormat } = useAuxFunctions();
    const { addClient } = useFirebaseClient();
    const [previousPage, setPreviousPage] = useState();
    const [newClient, setNewClient] = useState({
        email: '',
        name: '',
        dni: '',
        phone: '',
        obs: '',
        residence: {
            street: '',
            number: '',
            city: '',
            state: ''
        }
    });

    const [residence, setResidence] = useState({
        street: '',
        number: '',
        city: '',
        state: ''
    });

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChenge = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })
        setNewClient({ ...newClient, [name]: value })
    }

    const handleChangeResidence = ({ target: { name, value } }) => {
        setResidence({ ...residence, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const emailOk = validateEmailFormat(user.email)
        if (emailOk) {
            const formOk = validateForm();
            if (formOk) {
                const resp = await signUp(user.email, user.password);
                if (resp === true) {
                    //Cargar datos del Cliente en Client
                    const cliOk = await addClient(newClient);
                    if (cliOk) {
                        //Hacer Login con los datos del nuevousuario registrado
                        setError('')
                        if( await login(user.email, user.password)){
                            if(previousPage === 'Cart'){
                                navigate('/cart');
                            } else {
                                navigate('/');
                            }
                            
                         } 
                        
                    } else {
                        //si registro el usuario y no pudo generar el cliente
                        setError('No se pudo registrar el Cliente, reintentando...')
                        setTimeout(addClient(newClient), 1000)
                    }
                }
            }
        }else{
            setError('Email Incorrecto...');
        }
    }

    const validateForm = () => {

        if (newClient.name === '') {
            setError('el Nombre ingresado es Incorrecto');
            return (false);
        } else if (newClient.dni.length !== 8) {
            setError('el número de DNI es Incorrecto');
            return (false);
        } else if (newClient.phone === '') {
            setError('por favor Ingrese un Teléfono de contacto');
            return (false);
        } else if (residence.street === '' || residence.number === '' || residence.city === '' || residence.state === '') {
            setError('El domicilio ingresado es Incorrecto');
            return (false);
        } else {
            setError('');
            return (true);
        }
    }
    const resetError = () => {
        setError('');
    }

    useEffect(() => {
        setNewClient({ ...newClient, residence: residence })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [residence])
    useEffect(() => {
        setPreviousPage(page)
        setPageIndex('register');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div className="container mainAuthContainer text-center mt-5 mb-5 card">
                <div className="pt-3">
                    {error && <Alert message={error} />}
                    <div className="d-flex justify-content-center">
                        <img src={imgUser} height={30} alt="Login de Usuario" />
                        <h5 className="mt-2 mb-2 ms-2">Crea tu Cuenta</h5>
                    </div>
                    <form className="bg-white rounded mb-4" onSubmit={handleOnSubmit}>
                        <div className="mb-2 mt-4">
                            <label htmlFor="email" className="d-block text-dark text-sm font-bold mb-2 me-3">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChenge}
                                placeholder="email@yourcompany.ltd"
                                className="shadow border rounded py-2 px-3 text-dark w-75"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="d-block text-dark text-sm font-bold mb-2 me-3">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChenge}
                                placeholder="******"
                                className="shadow border rounded py-2 px-3 text-dark w-50"
                                autoComplete="off"
                            />
                        </div>
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
                        <button className="text-white py-2 px-4 rounded shadow btn btn-secondary w-50 mt-5" >Registrar</button>
                    </form>
                    <div className="mt-5">
                        <p className="my-4 text-secondary d-flex justify-content-center px-3 me-2 mt-4">Ya tienes una cuenta...<Link to='/login' className="btn rounded py-1 px-2 border ms-2 shadow btn-secondary text-white link w-25" onClick={resetError} >Login</Link></p>
                    </div>


                </div>
            </div>
        </>




    )
}
export default Register