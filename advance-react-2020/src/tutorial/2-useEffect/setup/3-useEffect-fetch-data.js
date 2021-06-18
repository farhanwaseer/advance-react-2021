import React, { useState, useEffect, fatch } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  const getUsers =  async () => {
    const response = await fatch(url);
    const users = await response.json;
    console.log(users);
  }

  useEffect(() => {
   getUsers();
  });

  return (
    <>
    <h3>Github users</h3>
    </>
  );
};

export default UseEffectFetchData;
