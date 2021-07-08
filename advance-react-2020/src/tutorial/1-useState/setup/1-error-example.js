import React from 'react';

const ErrorExample = () => {
  var title = 'title random';

  const handleClick = () => {
    title = 'hello people';
  }

  return (
    <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>change button</button>
    </React.Fragment>
  );
};

export default ErrorExample;
