import { useEffect, useState } from "react"
import Alert from "./Alert"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext"
import { useAuxFunctions } from "../../hooks/useAuxFunctions/useAuxFunctions"
import { useProductsContext } from "../../hooks/useProductsContext/useProductsContext"



const RecoverPassword = () => {

    const { resetPassword, error, setError } = useAuthContext();
    const { setPageIndex } = useProductsContext();
    const { validateEmailFormat } = useAuxFunctions();

    const [user, setUser] = useState({
        email: ''
    })

    const handleChenge = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })
    }

    const handleRecoverPasword = (e) => {
        e.preventDefault()
        const emailOk = validateEmailFormat(user.email);
        if (emailOk) {
            if (user.email) {
                resetPassword(user.email)
            } else {
                setError('por favor ingresa un correo válido')
            }
        }else{
            setError('Email Incorrecto...')
        }

    }

    const resetError = () => {
        setError('')
    }

    useEffect(() => {
        setPageIndex('recoverpass');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="container mainAuthContainer text-center mt-5 mb-5 card">
            <div className="pt-3">
                {error && <Alert message={error} />}
            </div>
            <h5 className="mt-2 mb-4">Recuperación de Contraseña</h5>
            <form className="bg-white rounded mb-4" onSubmit={handleRecoverPasword}>
                <div className="mb-4">
                    <label htmlFor="email" className="d-block text-dark text-sm font-bold mb-2 me-3">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChenge}
                        placeholder="email@yourname.dom"
                        className="shadow border rounded py-2 px-3 text-dark w-75" />
                </div>

                <div className="flex items-center justify-between">
                    <button className="text-white py-2 px-4 rounded shadow btn btn-secondary w-50 mt">Enviar Correo</button>
                </div>

            </form>
            <p className="my-2 text-secondary d-flex justify-content-center px-3 me-2 mt-3">Ya tienes una cuenta...<Link to='/login' className="btn rounded py-1 px-2 border ms-2 shadow btn-secondary text-white link" onClick={resetError}>Login</Link></p>
            <p className="my-2 text-secondary d-flex justify-content-center px-3 me-2 mt-1">No tienes una cuenta...<Link to='/register' className="btn rounded py-1 px-2 border ms-2 shadow btn-secondary text-white link" onClick={resetError}>Registrar</Link></p>
        </div>


    )
}
export default RecoverPassword