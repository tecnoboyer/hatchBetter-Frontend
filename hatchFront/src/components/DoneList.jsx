import React from 'react';

function DoneList({ donetasks, handleCheckboxChange }) {
  const handleChange = (taskId, taskStatus) => {
    handleCheckboxChange(taskId, taskStatus);
  };
  const donetasksloc = donetasks.filter((task) => task.status);

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {donetasksloc.map((task) => (
        <li key={task._id}>
          <input type="checkbox" onChange={() => handleChange(task._id, task.status)} />
          {task.description}
        </li>
      ))}
    </ul>
  );
}

export default DoneList;
