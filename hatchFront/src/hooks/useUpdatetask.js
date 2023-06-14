import { useState, useEffect } from 'react';

function useUpdatetask() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updatedTask, setUpdatedTask] = useState(null);

  console.log('mark');
  console.dir(updatedTask);

  useEffect(() => {
    if (updatedTask) {
      setIsLoading(true);
      setError(null);

      // Make the POST request to update the task in the database
      fetch('http://localhost:8000/api/adminTask', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      })
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);
          // Handle the response from the server if needed
        })
        .catch(error => {
          setIsLoading(false);
          setError('Error updating task');
        });
    }
  }, [updatedTask]);

  const updateTask = (taskId,Status) => {
    // Update the task object with the new status
    const updatedTask = {
      _id: taskId,
      status:Status
    };

    // Set the updated task to trigger the API request
    setUpdatedTask(updatedTask);
  };

  return {
    isLoading,
    error,
    updateTask,
  };
}

export default useUpdatetask;
