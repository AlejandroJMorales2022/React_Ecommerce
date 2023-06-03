import { useState } from "react"
import Alert from "./Alert"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext"
import './Auth.css'



const Register = () => {

    const { signUp, error, setError } = useAuthContext()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChenge = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })
    }



    const handleOnSubmit = async (e) => {
        e.preventDefault();
        signUp(user.email, user.password);

    }

    const resetError = () => {
        setError('');
    }

    return (
        <>
            <div className="container mainAuthContainer text-center mt-5 mb-5 card">
                <div className="pt-3">     
                    {error && <Alert message={error} />}    {/* {error && <p style={{color:'red', margin:10, paddingLeft:50, background:'black', borderRadius:5}}>{error}</p>} */}
                    <h5 className="mt-2 mb-2">Crea tu cuenta</h5>
                    <form className="bg-white rounded mb-4" onSubmit={handleOnSubmit}>
                        <div className="mb-4 mt-4">
                            <label htmlFor="email" className="d-block text-dark text-sm font-bold mb-2 me-3">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChenge}
                                placeholder="email@yourcompany.ltd"
                                className="shadow border rounded py-2 px-3 text-dark w-75"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="d-block text-dark text-sm font-bold mb-2 me-3">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChenge}
                                placeholder="******"
                                className="shadow border rounded py-2 px-3 text-dark w-50"
                            />
                        </div>

                        <button className="text-white py-2 px-4 rounded shadow btn btn-secondary w-50 mt-4" >Registrar</button>
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