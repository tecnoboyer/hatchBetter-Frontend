import React from 'react';

function DoneList({ doneTasks }) {
  const handleChange = (taskId, checked) => {
    console.log('Berga en DoneList : '+taskId)
    // handleCheckboxChange(taskId, checked);
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
>
        </li>
      ))}
    </ul>
  );
}

export default DoneList;


