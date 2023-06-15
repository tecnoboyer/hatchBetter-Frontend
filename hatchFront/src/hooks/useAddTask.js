import { useState } from 'react';

function useAddTask() {
  const [isLoading2, setIsLoading2] = useState(false);
  const [error, setError] = useState(null);

  const addTask = (description, status) => {
    setIsLoading2(true);
    setError(null);

    const newTask = { description, status };

    fetch('http://localhost:8000/api/adminTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => {
        setIsLoading2(false);
        // Handle the response from the server if needed
      })
      .catch(error => {
        setIsLoading2(false);
        setError('Error adding task');
      });
  };

  return {
    isLoading2,
    error,
    addTask,
  };
}

export default useAddTask;
