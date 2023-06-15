import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const useSocket = (serverUrl) => {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(serverUrl); // Establish the Socket.io connection

    // Cleanup on unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, [serverUrl]);

  const sendMessage = (message) => {
    socketRef.current.emit('message', message);
  };

  useEffect(() => {
    if (!socketRef.current) return;

    socketRef.current.on('response', (data) => {
      // Handle the received response
      console.log('Received response:', data);
    });

    // Add more event listeners here for other events

  }, []);

  return { sendMessage };
};

export default useSocket;
