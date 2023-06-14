import React from 'react';

function DoneList({ doneTasks, handleCheckboxChange }) {

  const handleChange = (taskId,taskStatus) => {
    handleCheckboxChange(taskId,taskStatus);

  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}   >
      {doneTasks.map(task => (
        <li key={task._id}>

            <input
              type="checkbox"
              onChange={() => handleChange(task._id,task.status)}
            />
            {task.description}
        </li>
      ))}
    </ul>
  );
}

export default DoneList;


