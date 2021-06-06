import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Constructor');
    this.state={
      persons:[
        {index:0, name:'Max', age:28},
        {index:1, name:'Manu', age:29},
        {index:2, name:'Stephanie',age:26}
      ],
      otherstate:'Voila',
      showPersons:false
    }
  }


  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount rendering');
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

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  nameChangedHandler=(event,index)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.index==index;
    })

    const person={
      ...this.state.persons[personIndex]
    }
    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons:persons
    })
  }

  togglePersonHandler=()=>{
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    console.log('[App.js] render');
    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return (
              <Person
              name={person.name}
              age={person.age}
              click={()=>this.deletePersonHandler(index)}
              changed={(event)=>this.nameChangedHandler(event,index)}
              key={index}/>
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
