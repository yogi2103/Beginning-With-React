import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie',age:26}
    ],
    otherstate:'Voila',
    showPersons:false
  }

  switchnameHandler=(newName)=>{
    console.log('CLicked!');
    this.setState({
      persons:[
        {name:'Yogesh',age:21},
        {name:'Manu', age:29},
        {name:'Stephanie',age:26}
      ]
    })
  }


  nameChangedHandler=(event)=>{
    this.setState({
      persons:[
        {name:'Yogesh',age:21},
        {name:event.target.value, age:29},
        {name:'Stephanie',age:26}
      ]
    })
  }

  togglePersonHandler=()=>{
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map(person=>{
            return (
              <Person
              name={person.name}
              age={person.age}
              changed={this.nameChangedHandler}/>
            )
          })}
      </div> 
      );
    }

    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <button onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
