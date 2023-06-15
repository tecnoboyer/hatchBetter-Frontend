import React, { useState } from 'react';



function useDeleteTask() {
  const [isloading3, setIsloading3] = useState(false);
  const [error, setError] = useState(null);

  const deleteTask = () => {
    setIsoading3(true);
    setError(null);


    fetch('http://localhost:8000/api/adminTask', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(data => {
        setIsloading3(false);
        // Handle the response from the server if needed
      })
      .catch(error => {
        setIsloading3(false);
        setError('Error adding task');
      });
  };

  return {
    isloading3,
    error,
    deleteTask,
  };
}

export default useDeleteTask;
