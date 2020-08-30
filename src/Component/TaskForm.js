import React,{useState, useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'
export const TaskForm = () => {
    const [title, settitle] = useState('');
    const { AddTask,ClearTask } = useContext(TaskContext);
    const OnClickhandler = (e) => {
        e.preventDefault();
        AddTask(title);
        settitle('');
    }

    
    return (
        <form className="form" onSubmit={OnClickhandler}>
            <input className="task-input" type="text" onChange={(e) => settitle(e.target.value)}
                placeholder="Add Task..." value={title} required />
            <div className="buttons">
                 <button type="submit" className="btn add-task-btn">Add Task</button>
                 <button onClick={ClearTask} className="btn clear-btn" >Clear</button>
            </div>
       </form>
    )
}
