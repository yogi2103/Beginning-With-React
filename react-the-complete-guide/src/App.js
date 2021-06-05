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
    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <button onClick={this.togglePersonHandler}>Switch Name</button>
        {
          this.state.showPersons ?
          <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>love Cricket</Person>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={()=>this.switchnameHandler('Yogi')}
          changed={this.nameChangedHandler}/>
          <Person name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
          <p>{this.state.otherstate}</p>
        </div> : null
        }
      </div>
    );
  }
}

export default App;
