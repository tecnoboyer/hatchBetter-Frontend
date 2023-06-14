import React from 'react';

function TodoList({ todoTasks ,handleCheckboxChange}) {

  const handleChange = (taskId) => {
    handleCheckboxChange(taskId);
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


