import React from 'react';

const ErrorExample = () => {
  let title = 'title random';

  const handleClick = () => {
    title = 'hello people';
  }

  return (
    <>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>change button</button>
    </>
  );
};

export default ErrorExample;
