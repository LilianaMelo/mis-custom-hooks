import { useState } from 'react'

// counter para un carrito de compras.
// aqui esta la logica de negocio.
export const useCounter = ( initialValue = 10 ) => {
  
    const [counter, setCounter] = useState( initialValue );

    // [object Object] => este significa es la representacion toString de un objeto. muestra las letras.
    const increment = ( value = 1 ) => {
        setCounter( (current) => current + value );
    } // se añade (current) :: valor actual, esto permite que la funcion tome la el valor anterior.

    const decrement = ( value = 1 ) => {

        // if (counter === 0 ) return; // esta validacion no permite que pase de 0.
        setCounter( (current) => current - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return { // puede ser un objeto o un array [] y se debe usar [] en el otro componente. Se recomienda usar {}como un objeto, es más facil.
        counter, // 
        increment,
        decrement,
        reset,
    }
}

export default useCounter;