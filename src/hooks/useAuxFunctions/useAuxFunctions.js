

const useAuxFunctions = () => {

    const validateEmailFormat = (value) => {
        if (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(value)) {
            return (true);
        }else{
            return(false);
        }
    }


    return {validateEmailFormat}
    }
    export { useAuxFunctions }