import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


const initialState = []; // se deja como arreglo vacio.

const init = () => { // esto permite que se guarde la informacion en el localStorage y al recargar la página no se borre.
    return JSON.parse( localStorage.getItem("todos") ) || [];
}



export const useTodos = () => {

    const [ todos, dispatchTodoAction ] = useReducer( todoReducer , initialState, init )

    // todo cambia se efecuta un efecto secundario. para guardar en localStorage
    useEffect(() => { // se dispara cuando el todo cambia
        localStorage.setItem("todos", JSON.stringify(todos) ); // guardar los todos en el localStorage del navegador.
    }, [todos])
    

    // Guardar y leer ToDos en LocalStore.
    // agregar un todo, mirar tambien en todoReducer. se complementan.
    const addNewTodo = ( todo ) => {
        // console.log(todo);
        const action = { // esta es la accion
            type: "[TODO] Add Todo",
            payload: todo
        }
        // aqui se envia la accion anterior,  
        dispatchTodoAction(action);
        
    }



    // eliminar todo, mirar tambien en todoReducer. se complementan.
    const deleteTodo = (id) => {
        // console.log({ id })

        dispatchTodoAction({ // esta parte elimina el todo en pagina y en el localStorage
            type: "[TODO] Remove Todo",
            payload: id,
        })
    }

    

    // Funcion de ToggleTodo para marcar como completado o pendiente un todo, mirar tambien en todoReducer. se complementan.
    const toggleTodo = ( id ) => {
        // console.log({ id });
        dispatchTodoAction({ 
            type: "[TODO] Toggle todo", // el nombre debe ser igual al de todoReducer.
            payload: id,
        })

    }


    return {
        todos, 
        addNewTodo, 
        deleteTodo, 
        toggleTodo,
        todosCount: todos.length, // muestra los todos actualizados
        pendingTodosCount: todos.filter(todo => !todo.done).length 
    }
}
