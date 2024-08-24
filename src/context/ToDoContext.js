import React, {createContext, useContext} from "react";



export const ToDoContext = createContext({
    todos:[
       
    ],
    addToDo: (todo) => {},
    UpdateToDo: (id, todo) => {},
    DeleteToDo: (id) => {},
    toggleCompleted: (id) => {}
});


export const UseTodo = () =>{
    return useContext(ToDoContext);
}

export const Todoprovider = ToDoContext.Provider;