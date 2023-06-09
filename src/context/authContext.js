import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';
import { auth } from '../services/firebase/firebaseConfig';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);
    const [emailAuth, setEmailAuth] = useState('');


    const [error, setError] = useState('');

    //Funcion para Registro de Usuario en Firebase    
    const signUp = async (email, password) => {
        setError('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            return (true);
        }
        catch (error) {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                setError('Existe un Usuario Registrado con este Email');
            } if (error.message === 'Firebase: Error (auth/missing-password).') {
                setError('Error de Acceso: Password Incorrecto');
            } else {
                setError(error.message);
            }
            return (false);
        }
    }
    //funcion para Login de Usuarios en Firebase
    const login = async (email, password) => {
        setError('');
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password);
            setEmailAuth(resp.user.email);
            setLogged(true);
            return (true)
        } catch (error) {
            setLogged(false);
            setEmailAuth('');
            if (error.message === 'Firebase: Error (auth/missing-password).') {
                setError('Error de Acceso: Password Incorrecto');
            } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                setError('Error de Acceso: El Usuario No Existe')
            } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                setError('Error de Acceso: Password Incorrecto')
            }else {
                setError(error.message);
            }

        }

    }


    //funcion para Resetear un password
    const resetPassword = async (email) => {
        if (!email) setError('por favor ingresa correo electrónico válido');
        try {
            await sendPasswordResetEmail(auth, email);
            setError('Se ha enviado un link a tu correo para resetear tu clave de acceso...');
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/user-not-found).') {
                setError('Error de Acceso: El Usuario No Existe');
            } else {
                setError(error.message);
            }
        }

    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, []);


    const logOut = async () => {
        try {
            await signOut(auth);
            setLogged(false);
            setEmailAuth('');
            return (true);
        } catch (error) {
            console.log(error);
            return(false);
        }

    }

    return (

        <AuthContext.Provider value={{ signUp, login, logOut, resetPassword, error, setError, user, loading, logged, setLogged, emailAuth, setEmailAuth, auth }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider }