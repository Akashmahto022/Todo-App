import { createContext, useContext } from "react";

 export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Todo app",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    completedTodo: (id)=>{},
    deleteTodo: (id)=>{}
})

export function useTodo(){
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;
