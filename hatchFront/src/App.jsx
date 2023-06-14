import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import './App.css';
import useUpdateTask  from './hooks/useUpdatetask';
// import DoneList from './DoneList';

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, updateTask } = useUpdateTask();





  useEffect(() => {
    fetch('http://localhost:8000/api/adminTask')
      .then(response => response.json())
      .then(data => setTasks(data.tasks))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleCheckboxChange = (taskId,taskStatus) => {
    console.log('taskId : '+taskId);
    console.log('taskStatus : '+taskStatus);
    // const updatedTasks = tasks.map(task => {
    //   if (task._id === taskId) {
    //     return { ...task, status: !task.status };
    //   }
    //   return task;
    // });
    // // setTasks(updatedTasks); // Lets get it out to continue
    updateTask(taskId,taskStatus);
  };




  const todotasks = tasks.filter(task => !task.status);
  const donetasks = tasks.filter(task => task.status);

  return (
    <>
      <div className="wrapper">
        <div>
          <h2 className="head1">Marveleous v2.0</h2>
          <h5 className="head2">Delete all tasks</h5>
        </div>

        <div className="one">
          <input></input>
          <button className="button">Add</button>
        </div>

        <div className="two">
          <input></input>
        </div>
        <div className="three">
          <h6>To Do</h6>
          <hr />
          {todotasks.length > 0 ? (
            <TodoList todoTasks={todotasks} handleCheckboxChange={handleCheckboxChange}/>
          ) : ( <p>No tasks to display</p> )}
        </div>
        <div className="four">
          <h6>Done</h6>
          <hr />
          {donetasks.length > 0 ? (
             <DoneList doneTasks={donetasks}  handleCheckboxChange={handleCheckboxChange}  />
          ) : (
            <p>No tasks to display</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
