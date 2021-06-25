import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  return (
    <>
<article>
  <form className='form'>
    <div className='form-control'>
      <label htmlFor="firstName">Name :</label>
      <input type="text" name="firstName" id="firstName" />
    </div>
  </form>
</article>
    </>
  )
};

export default ControlledInputs;
