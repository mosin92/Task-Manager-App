import React,{createContext,useState} from 'react'

export const TaskContext = createContext();

 export const TaskListContextProvider = ({children}) => {
    const [task, settask] = useState([
        
    ])
     
     const [ edititem, setedititem ] = useState(null);
     
     const AddTask = (title) => {
         settask([...task,{title,id:Math.floor(Math.random() * 100000000)}])
     }
     const RemoveTask = (id) => {
         settask(task.filter(tasks=>tasks.id!==id))
     }
     const ClearTask = () => {
         settask([])
     }

     const FindTask = id => {
         const item = task.find(tasks => tasks.id === id);
         setedititem(item);
     }
     const EditTask = (title, id) => {
         const NewTask = task.map(tasks => tasks.id === id ? {title, id} : tasks);
         settask(NewTask);
         console.log(NewTask);
         setedititem(null);
     }
    return (
        <TaskContext.Provider value={{
            task,
            AddTask,
            RemoveTask,
            ClearTask,
            FindTask,
            edititem,
            EditTask
        }}>
            {children}
 
        </TaskContext.Provider>
    )
}

