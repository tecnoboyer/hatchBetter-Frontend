import React from 'react';

function DoneList({ doneTasks, handleCheckboxChange }) {

  
  const handleChange = (taskId) => {
    handleCheckboxChange(taskId);
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}   >
      {doneTasks.map(task => (
        <li key={task._id}>

            <input
              type="checkbox"
              onChange={() => handleChange(task._id)}
            />
            {task.description}
        </li>
      ))}
    </ul>
  );
}

export default DoneList;


