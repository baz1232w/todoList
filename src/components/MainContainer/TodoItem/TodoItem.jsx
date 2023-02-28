import s from '../MainContainer.module.css'
import {useState} from "react";

export const TodoItem = ({el,deleteTodo}) => {
    const [complete,setComplete] = useState(false)

    return (
        <div className={s.todo}>
            <p className={ complete ? s.complete : ''}>{el}</p>
            <div>
                <button onClick={()=>setComplete(!complete)}>Complete</button>
                <button onClick={()=>deleteTodo(el)}>Delete</button>
            </div>
        </div>
    )
}