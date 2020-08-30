import React,{useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'
export const Task = ({result}) => {
    const { RemoveTask } = useContext(TaskContext);
    return (
        <li className="list-item">
            <span> {result.title} </span>
            <div>
                <button onClick={()=>RemoveTask(result.id)} className="btn-delete task-btn"> 
                <i className="fas fa-trash-alt"></i>

                </button> {''}
                <button  className="btn-edit task-btn">
                <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

