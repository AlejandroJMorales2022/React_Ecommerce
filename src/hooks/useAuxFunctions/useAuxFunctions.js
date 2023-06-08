import { useAuthContext } from "../useAuthContext/useAuthContext";


const useAuxFunctions = () => {

    const { setError } = useAuthContext()

    const validateEmailFormat = (value) => {
        if (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(value)) {
            setError('');
            return (true);
        }else{
            setError('Email Incorrecto, por favor escriba un email válido...')
            return(false);
        }
    }
    const validatePassword = (value)=>{
            if (value !== '' && value.length >=6){
                setError('');
                return (true);
            }else {
                setError('Password Incorrecto, debe tener 6 caracteres como mínimo')
                return (false);
            }
    }

    return {validateEmailFormat, validatePassword}
    }
    export { useAuxFunctions }