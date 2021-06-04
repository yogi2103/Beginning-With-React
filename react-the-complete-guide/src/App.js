import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app =(props)=>{
  const [personsState, setPersonState] = useState({
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie',age:26}
    ],
    otherstate:'Voila'
  })

  const switchnameHandler=()=>{
    setPersonState({
      persons:[
        {name:'Yogi', age:23},
        {name:'Manu', age:29},
        {name:'Stephanie',age:26}
      ]
    })
  }

    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <button onClick={switchnameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>love Cricket</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        <p>{personsState.otherstate}</p>
      </div>
    );
}

export default app;
