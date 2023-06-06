import { useEffect, useState } from "react"
import Alert from "./Alert"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext"
import './Auth.css'
import imgUser from '../../assets/img/icons/account.png'
import { useAuxFunctions } from "../../hooks/useAuxFunctions/useAuxFunctions"
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext"



const Login = () => {

    const { login, error, setError } = useAuthContext()
    const { setPageIndex, page } = useProductsContext();
    const { validateEmailFormat } = useAuxFunctions();
    const [previousPage, setPreviousPage] = useState();
    const navigate =useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChenge = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const emailOk = validateEmailFormat(user.email);
        if(emailOk){
             if( await login(user.email, user.password)){
                if(previousPage === 'Cart'){
                    navigate('/cart');
                } else {
                    navigate('/');
                }
                
             } 
        }    
    }


    const resetError = () => {
        setError('');
    }

    useEffect(() => {
        setPreviousPage(page)
        setPageIndex('login');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="container mainAuthContainer text-center mt-5 mb-5 card">
                <div className="pt-2">
                    {error && <Alert message={error} />}
                </div>

                <div className="d-flex justify-content-center">
                    <img src={imgUser} height={30} alt="Login de Usuario" />
                    <h5 className="mt-2 mb-2 ms-2">Login</h5>
                </div>
                <form className="bg-white shadow-md rounded mb-4" onSubmit={handleOnSubmit}>
                    <div className="mb-4 mt-3">
                        <label htmlFor="email" className="d-block  text-dark text-sm font-bold mb-2 me-3">Email</label>
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
                    <div className="mb-4">
                        <label htmlFor="password" className="d-block mb-2 me-3" >Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChenge}
                            placeholder="******"
                            className="shadow border rounded py-2 px-3 text-dark "
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <button className="text-white py-2 px-4 rounded shadow btn btn-secondary w-50 mb-3">Login</button>
                    </div>
                    <p className="my-2 text-secondary d-flex justify-content-center px-3 me-2">No tienes una cuenta...<Link to='/register' className="btn rounded py-1 px-2 border ms-2 shadow btn-secondary text-white link" onClick={resetError} >Registrar</Link></p>
                    <div className="d-flex align-items-center justify-content-evenly">


                        <Link to='/recoverPass/' className="text-secondary link recover" title="Recuperar contraseña" onClick={resetError} >Olvidaste tu contraseña?</Link>
                    </div>

                </form>

            </div>
        </>




    )
}
export default Login