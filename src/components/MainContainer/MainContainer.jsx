import s from './MainContainer.module.css'
import {useState} from "react";
import {TodoItem} from "./TodoItem/TodoItem";

export const MainContainer = () => {
    const [todo,addToDo] = useState([])
    const [inputText,changeInput] = useState('')

    const addTodoItem = () => {
        if(!inputText){
            return false
        }
        const newArr = [...todo,inputText]
        addToDo(newArr)
        changeInput('')
    }

    const changeInputText = (e) =>{
        if(e.target.value === undefined){
            changeInput('')
        }
        changeInput(e.target.value)
    }

    const deleteTodoItem = (item) => {
        const newArr = [...todo].filter((el) => el !== item )
        addToDo(newArr)
    }
    return(
        <div className={s.MainContainer}>
            <div className={s.inputs}>
                <input value={inputText} onChange={changeInputText} placeholder={'add todos'}/>
                <button className={s.mainBtn} onClick={addTodoItem}>addTodo</button>
            </div>
                {todo.map((el,index) => {
                    return(
                            <TodoItem deleteTodo={deleteTodoItem} key={index}    el={el} />
                    )
                } )}
            {
                todo.length ? <button className={s.mainBtn} onClick={()=> addToDo([])}>CleanAll</button> : null
            }
        </div>
    )
}