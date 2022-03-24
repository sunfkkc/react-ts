import React,{useState} from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import TodoList from './components/TodoList';
import { Todo } from './model';

function App()  {
  const [todo, setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd = function(e:React.FormEvent){
    e.preventDefault();

    if(todo){
      setTodos([...todos,{
        id: Date.now(),
        todo: todo,
        isDone: false,
      }])
      setTodo("")
    }

    
  }
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>);
  
}

export default App;
