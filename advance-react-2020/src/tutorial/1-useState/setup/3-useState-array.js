import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

   const [people, setPeople] = React.useState(data);

  return <>
   {
     people.map((person) => {
      console.log(person) 
      const {id, name} = person;

      return (
        <div key={id} className="item">
          <h3>{name}</h3>
        </div>
      );
     })
   }
    
  </>
};

export default UseStateArray;
