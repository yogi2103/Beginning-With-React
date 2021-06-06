import React,{Component} from 'react';
import './Person.css'


class Person extends Component{

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message:'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState,snapshot){
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
    }

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