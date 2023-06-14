import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import './App.css';
// import DoneList from './DoneList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/adminTask')
      .then(response => response.json())
      .then(data => setTasks(data.tasks))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const todotasks = tasks.filter(task => task.status);
  const donetasks = tasks.filter(task => !task.status);

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
            <TodoList todoTasks={todotasks} />
          ) : (
            <p>No tasks to display</p>
          )}
        </div>

        <div className="four">
          <h6>Done</h6>
          <hr />
          {donetasks.length > 0 ? (
             <DoneList doneTasks={donetasks} />
          ) : (
            <p>No tasks to display</p>
          )}
          
        </div>
      </div>
    </>
  );
}

export default App;
