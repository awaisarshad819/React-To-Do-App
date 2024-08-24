import { useState } from "react";
import { UseTodo } from "../context";

const ToDoItem = ({ todo }) => {
    const {DeleteToDo} = UseTodo();
    
    const Del = (id) => {
        
        
        DeleteToDo(id);
    }
    return ( 
        
        <div
            className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
                ${todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}` }
            key={todo.id}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                
            />
            <input
                type="text"
                className={` outline-none w-full bg-transparent rounded-lg ${todo.isCompleted ? "line-through" : ""}`}
                value={todo.todo}
                readonly="readonly"
            />
            
            
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => Del(todo.id)}
            >
                ❌
            </button>
           
        </div>
     );
}
 
export default ToDoItem;