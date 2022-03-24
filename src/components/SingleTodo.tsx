import React,{useState} from 'react'
import { Todo } from '../model'
import './styles.css'
import {AiFillEdit, AiFillDelete, } from 'react-icons/ai'
import{MdDone} from 'react-icons/md'
import TodoList from './TodoList'

interface Props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,

}



function SingleTodo({todo, todos, setTodos}:Props) {

    const [edit,setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = function(id:number){
        setTodos(
            todos.map((todo)=>(todo.id===id? {...todo,isDone: !todo.isDone} : todo))
        )}

    const handleDelete = function(id:number){
        setTodos(
            todos.filter(function(todo){return todo.id !== id})
        )
    }

    const handleEdit = function(e:React.FormEvent, id:number){
        e.preventDefault()

        setTodos(
            todos.map(
                todo=>(
                    todo.id===id? 
                        {...todo,todo:editTodo}
                    : todo
                )
            )
        )

        setEdit(false)
    }
  return (
      <form className='todos__single' onSubmit={function(e){handleEdit(e,todo.id)}}>
          {
              edit?(
                <input 
                className='todos__single--text'
                value={editTodo} 
                onChange={function(e){setEditTodo(e.target.value)}}/>
              ) : todo.isDone? (
                <s className="todos__single--text">{todo.todo}</s>
              ) : (
                <span className="todos__single--text">{todo.todo}</span>
              )
          }

          <div>
              <span className="icon" onClick={function(e){
                  if(!edit && !todo.isDone){
                      setEdit(!edit)
                  }
              }}><AiFillEdit/></span>
              <span className="icon" onClick={e=>{handleDelete(todo.id)}}><AiFillDelete/></span>
              <span className="icon" onClick={e=>handleDone(todo.id)}><MdDone/></span>
          </div>
      </form>
  )
}

export default SingleTodo