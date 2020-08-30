import React from 'react';
import './App.css';
import { TaskListContextProvider } from './Context/TaskContext'
import { TaskList } from './Component/TaskList'
import {TaskForm} from './Component/TaskForm'
function App() {
  return (
    <div className="container">
      <div className="app-cover">
        <div className="main">
          <div className="header">
           <h1>Task Manager App</h1>
          </div>
          <TaskListContextProvider>
            <TaskForm/>
            <TaskList/>
           </TaskListContextProvider>
        </div>

      </div>

    </div>
  );
}

export default App;
