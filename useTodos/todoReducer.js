// js puro
// funcion pura de js

// agregar un todo, mirar tambien en todoApp. se complementan.
export const todoReducer = ( initialState, action ) => {

    switch (action.type) { // casos de uso.
        case "[TODO] Add Todo":
            // throw new Error("Action.type = ABC no esta implementamenta"); // no se ha terminado por eso se pone este error.
            return [ ...initialState, action.payload ]; //  crear un nuevo arreglo. action.payload: aqui se va atener el nuevo todo.

        case "[TODO] Remove Todo": // regresa el todo siempre y cuando el todo sea diferente a action.paiload
            return initialState.filter( todo => todo.id !== action.payload) ; // .filter regresa un nuevo arreglo.

        case "[TODO] Toggle todo": //siempre retorna un estado
            return initialState.map(todo => {

                if (todo.id === action.payload) { // suponiendo el id del todo
                    return {
                        ...todo, 
                        done: !todo.done // !todo.done = esta pasa de true a false y de false a true. // done: es hecho o terminado.
                    }
                }

                return todo; // retorna el cuerpo de un todo
            });
            
            //.map// es un metodo de js para transformar un arreglo en otra cosa o un nuevo arreglo
    
        default:
            return initialState; 
    }

}