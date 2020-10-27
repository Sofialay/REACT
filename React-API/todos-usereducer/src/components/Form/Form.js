import React, {useContext, useReducer, useState} from 'react';
import todosReducer, { TODO_ADD, TODO_DELETE, TODO_EDIT } from '../reducers/todosReducer';
import TodoContext from '../context/TodoContext';
import UserTitleContext from '../context/UserTitleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Form.scss';



const Form = () => {
    const {titleUser} = useContext(UserTitleContext);
    const {task, setTask, todos, dispatch} = useContext(TodoContext);
    const [displayEditInput, setDisplayEditInput] = useState(false); //no debe ser solo un booleano
    const [newTask, setNewTask] = useState("");


    const changeTask = (event) => setNewTask(event.target.value);


    //add task
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: TODO_ADD, payload: {id: Date.now(), task, completed: false}}) //dispatch 'activa' siempre a la funcion reducer
        setTask('')
      }


      //edit only ONE task
      const editTodo = (id) => {
        
    //     let newDisplay = {
    //         id: newTODO.id, //crear funcion de newTodo
    //         display: false
    //     }

    displayEditInput(true);
}
    

      const handleEditTodo = (e) => {
        dispatch({type: TODO_EDIT, payload: {todos, newTask: newTask, editedId: e.target.id}}) //cambie newTask
        setDisplayEditInput(false); 
    }

      const _handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleEditTodo(e)
        }
      }

      //delete todo 

      const deleteTodo = (e) => {
        dispatch({type: TODO_DELETE, payload:{id: e.target.id}})
      }

    return (
        <React.Fragment>
            <section className="title-and-sub">
                <h1 className="title">{titleUser} To-do List</h1>
                <p className="sub">Track here the things that you need to do</p>
            </section>

            <div className="form">
                <form className="form-submit" >
                    <input type="text" placeholder = "Add a task" onChange={e => setTask(e.target.value)} />
                    <button onClick={handleSubmit} className="button-submit">Add</button>
                </form>
            </div>

            <div className="content-todos">
            {
                todos.map((todo, indexTodo) => { 
                    return(
                        <div key={todo.id} className="todo-info">
                            <input type="checkbox" /> 
                             {/*defaultChecked={todo.checked} onChange={e => setChecked(todo, e.target.checked)} */}
                            {
                            displayEditInput ? 
                            // esto hay que refactorizar a un array de objetos con un display 
                            //asi poder hacer displayEditInput[x].display

                            <input 
                            id={todo.id}
                            type="text" 
                            defaultValue={todo.task} 
                            onKeyDown={_handleKeyDown} 
                            onChange={changeTask} 
                            /> 
                            : 
                            <p>{todo.task}</p>
                            }
                            <button id={todo.id} className="btn-edit" onClick={editTodo(todo.id)}><FontAwesomeIcon icon={faEdit} /></button>
                            <button id={todo.id} className="btn-delete" onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    )
                })
            }
            </div>
        </React.Fragment>
    )
}


export default Form;