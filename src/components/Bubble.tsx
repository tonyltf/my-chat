import React from 'react';

const Bubble = (content: string) => {
  return <div className='odd:bg-white even:bg-gray-801 rounded-xl item-center space-x-5'>{content}</div>;
};

export default Bubble;
