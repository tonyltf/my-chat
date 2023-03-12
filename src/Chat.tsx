import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const appendMessage = (newMessage: string): void => {
    setMessages([...messages, newMessage]) ;
    setCurrentMessage('');
  };

  return <div className='dark:bg-slate-800'>
    <h1 className='text-3xl font-bold dark:text-white'>Chat</h1>
    <div>
      {messages?.map(message => (
        <div
          key={nanoid()}
          className='odd:bg-white odd:text-stone-900 even:bg-gray-801 rounded-xl item-center space-x-5'
        >
          {message}
        </div>
      ))}
    </div>
    <div className='flex space-x-5'>
      <input
        className='grow rounded-md text-slate-500 px-2'
        type='text'
        name='message'
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyDown={(e) => e.key=== 'Enter' && appendMessage(currentMessage) }
      />
      <button className='rounded-lg p-1 px-4 basis-1 dark:bg-black dark:text-white' onClick={() => { appendMessage(currentMessage); }}>Send</button>
    </div>
  </div>;
};

export default Chat;

