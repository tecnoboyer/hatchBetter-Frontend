import React from 'react';

function TodoList({ todoTasks ,handleCheckboxChange}) {

  const handleChange = (taskId,taskStatus) => {
    handleCheckboxChange(taskId,taskStatus);
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }} >
      {todoTasks.map(task => (
        
        <li key={task._id}>
            <input
              type="checkbox"
              onChange={() => handleChange(task._id,task.status)}
            />
            {task.description}.{task.status}
        </li>
      ))}

    </ul>
  );
}

export default TodoList;


