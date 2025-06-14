import React, { useState } from 'react';

interface TaskInterface {
    items:string[];
    n:number;
}

const Task = ({items, n}: TaskInterface) => {
  const [visible, setVisible] = useState(n);
  const visibleItems = items.slice(0, visible);
  const nLessItems = visible < items.length;
  
  const showMoreItems = () => {
    setVisible(prevN => Math.min(prevN + n, items.length));
  };

  return (
    <div>
      {visibleItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      
      {nLessItems && (
        <button onClick={showMoreItems}>Показать еще</button>
      )}
    </div>
  );
};

export default Task;