import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const useSocket = (serverUrl, handleReceiveMessage) => {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(serverUrl); // Establish the Socket.io connection

    // Cleanup on unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, [serverUrl]);

  const sendMessage = () => {
    socketRef.current.emit('message');
  };

  useEffect(() => {
    if (!socketRef.current) return;

    const socket = socketRef.current;

    socket.on('response', (data) => {
      // Handle the received response
      handleReceiveMessage(data);
    });

    // Cleanup on unmount
    return () => {
      socket.off('response');
    };
  }, [socketRef.current, handleReceiveMessage]);

  return { sendMessage };
};

export default useSocket;
