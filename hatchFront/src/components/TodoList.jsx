import React from 'react';

function TodoList({ todoTasks }) {
  const handleChange = (taskId, checked) => {
    console.log('Berga en : '+taskId)
    // handleCheckboxChange(taskId, checked);
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }} >
      {todoTasks.map(task => (
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

export default TodoList;


