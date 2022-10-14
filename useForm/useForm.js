// Hook

import { useState } from "react";

// initialForm = {} 
export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState(initialForm); 
    

    // funcion para hacer el cambio delinput.
    const onInputChange = ({ target }) => {
            const {name, value } = target; // aqui desestructura el name y value del target

            setFormState({
                ...formState,
                [ name ]: value
            });
    }

    const onResetForm = () => {
        setFormState( initialForm ); 
    }


    return { // se regresa como un objeto. es más facil expandirlo.
        setFormState,
        onResetForm,
        formState, // valor del formulario
        onInputChange, // funcion para cambiarlo.
        ...formState, // aqui desestructura el ...formState, para usar el username, email, password.
    }
}

