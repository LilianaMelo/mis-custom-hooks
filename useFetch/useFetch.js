import { useEffect, useState } from 'react';

// url de https://www.breakingbadapi.com/api/quotes/1

export const useFetch = ( url ) => {

    {/* // cada vez que el url cambia se va a volver a dispara este useEffect */}
    // logica como un Hook
    

    // el estado de nuestro hook
    const [stateUrl, setStateUrl] = useState({
        data: null, // la peticion http
        isLoading: true, // cuando esta cargando o no
        hasError: null, // cuando hay algun error
    })



    const getFetch = async () => {
        // 3.
        setStateUrl({
            ...stateUrl, // 
            isLoading: true,
        })


        // 1. este se hizo primero
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);

        //2.
        setStateUrl({ // en este caso de un objeto
            data: data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return { // se recomienda desestructurar con objetos.
        data:       stateUrl.data, // infode la url
        isLoading:  stateUrl.isLoading,
        hasError:   stateUrl.hasError,

    }
}
