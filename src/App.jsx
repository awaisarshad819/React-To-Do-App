
import { useEffect, useState } from 'react'
import {ToDoForm, ToDoItem} from './components/index'
import { Todoprovider, UseTodo, ToDoContext } from './context/'

function App() {
  const [todos, setToDos] = useState(() => {return JSON.parse(localStorage.getItem('todos'))});
  //const todos = UseTodo.todos;

  const addToDo = (todo) => {
    setToDos((prev) => [{id: Date.now(), ...todo}, ...prev]);
    console.log(todos);
    
  }
  const DeleteToDo = (id) =>{
      setToDos((prev) => prev.filter((todo) => (todo.id != id)))
      console.log(todos);
  }  
 
  
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Todoprovider value={{todos, addToDo, DeleteToDo}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((prev) => (<ToDoItem todo={prev} />))}
                    </div>
                </div>
        </div>
      </Todoprovider>
    </>
  )
}

export default App
