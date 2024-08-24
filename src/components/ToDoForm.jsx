import { useState } from "react";
import { UseTodo} from "../context/";
const ToDoForm = () => {

    const [todo, setToDo] = useState("");
    const {addToDo} = UseTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        addToDo({ todo, isCompleted: false});
        setToDo("");
    }

    const toDoChanged = (e) => {
        setToDo(e.target.value)
    }
    return ( 
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={toDoChanged}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
     );
}
 
export default ToDoForm;