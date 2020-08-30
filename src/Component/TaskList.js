import React,{useContext} from 'react'
import { TaskContext } from '../Context/TaskContext'
import {Task} from './Task'
export const TaskList = () => {
    const { task } = useContext(TaskContext);
    console.log(task);
    return (
        <div>
            {
                task.length ? ( <ul className="list">
                {
                    task.map(result => {
                        return(<Task result={result} key={result.id} />)
                    })
                }
                </ul>) : (
                        <div className="no-tasks">No task </div>

            )
            }
           
        </div>
    )
}


