import React from 'react';

function TodoList({ todotasks, handleCheckboxChange }) {
  const handleChange = (taskId, taskStatus) => {
    handleCheckboxChange(taskId, taskStatus);
  };

  const todotasksloc = todotasks.filter((task) => !task.status);

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todotasksloc.map((task) => (
        <li key={task._id}>
          <input type="checkbox" onChange={() => handleChange(task._id, task.status)} />
          {task.description}.{task.status}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
