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
    otherstate:'Voila'
  }

  switchnameHandler=(newName)=>{
    console.log('CLicked!');
    this.setState({
      persons:[
        {name:newName,age:21},
        {name:'Manu', age:29},
        {name:'Stephanie',age:26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <button onClick={this.switchnameHandler}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}>love Cricket</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={()=>this.switchnameHandler('Yogi')}/>
        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        <p>{this.state.otherstate}</p>
      </div>
    );
  }
}

export default App;
