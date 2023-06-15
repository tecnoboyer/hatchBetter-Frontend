import React, { useState, useEffect, useRef } from 'react';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import './App.css';
import useUpdateTask from './hooks/useUpdatetask';
import useAddTask from './hooks/useAddTask';
import useDeleteTask from './hooks/useDeleteTask';

import socketIOClient from 'socket.io-client'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, updateTask } = useUpdateTask();
  const { isLoading2: isAddingTask, error: addTaskError, addTask } = useAddTask();

  const [receivedMessage, setReceivedMessage] = useState('');
  const addInputRef = useRef(null);

  const [deleteAllClicked, setDeleteAllClicked] = useState(false);


  useEffect(() => {
    const socket = socketIOClient('http://localhost:8000');

    // Listen for 'message' event from the server
    socket.on('message', (data) => {
      console.log('Received message from server:', data);
      setReceivedMessage(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/adminTask')
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleCheckboxChange = (taskId, taskStatus) => {
    updateTask(taskId, taskStatus);
  };

  const handleAddTask = () => {
    const description = addInputRef.current.value;
    const status = false; 

    addTask(description, status);
    addInputRef.current.value = ''; 
  };


  useEffect(() => {
    if (deleteAllClicked) {
      const confirmDelete = window.confirm("Are you sure you want to delete all tasks?");
      if (confirmDelete) {
        useDeleteTask();
      }
      setDeleteAllClicked(false); 
    }
  }, [deleteAllClicked]);
  

  

  const todotasks = tasks.filter((task) => !task.status);
  const donetasks = tasks.filter((task) => task.status);

  return (
    <>
      <div className="wrapper">
        <div>
          <h2 className="head1">Marveleous v2.0</h2>
          <h5 className="head2" onClick={() => setDeleteAllClicked(true)}>Delete all tasks</h5>

        </div>

        <div className="one">
          <input name="add" ref={addInputRef} />
          <button className="button" onClick={handleAddTask}>
            Add
          </button>
        </div>

        <div className="two">
          <input></input>
        </div>
        <div className="three">
          <h6>To Do </h6>
          <hr />
          {todotasks.length > 0 ? (
            <TodoList todoTasks={todotasks} handleCheckboxChange={handleCheckboxChange} />
          ) : (
            <p>No tasks to display</p>
          )}
        </div>
        <div className="four">
          <h6>Done</h6>
          <hr />
          {donetasks.length > 0 ? (
            <DoneList doneTasks={donetasks} handleCheckboxChange={handleCheckboxChange} />
          ) : (
            <p>No tasks to display</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
