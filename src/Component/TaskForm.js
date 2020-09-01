import React,{useState, useContext,useEffect} from 'react'
import {TaskContext} from '../Context/TaskContext'
export const TaskForm = () => {
    const [title, settitle] = useState('');
    const { AddTask,ClearTask,EditTask,edititem } = useContext(TaskContext);
    const OnClickhandler = (e) => {
        e.preventDefault();
        if(edititem===null)
        {
            AddTask(title);
            settitle('');
        }
        else {
            EditTask(title, edititem.id);
        }
        
    }
    useEffect(
        () => {
            if (edititem) {
                settitle(edititem.title);
               
            }
            else {
                settitle('')
            }
          },[edititem]
      )
    
    return (
        <form className="form" onSubmit={OnClickhandler}>
            <input className="task-input" type="text" onChange={(e) => settitle(e.target.value)}
                placeholder="Add Task..." value={title} required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {edititem ? 'Edit Task':'Add Task'}
                    </button>
                 <button onClick={ClearTask} className="btn clear-btn" >Clear</button>
            </div>
       </form>
    )
}
