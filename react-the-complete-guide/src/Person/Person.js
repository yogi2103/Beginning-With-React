import React,{Component} from 'react';
import './Person.css'

class Person extends Component{
    render(){
        console.log('[Person.js] rendering');
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm a {this.props.name} and {this.props.age} years old and hobbies {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
    );
    }
}
export default Person;