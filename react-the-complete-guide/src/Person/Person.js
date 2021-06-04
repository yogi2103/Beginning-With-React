import React from 'react';
import './Person.css'

const Person = (props) => (
            <div className="Person">
                <p onClick={props.click}>I'm a {props.name} and {props.age} years old and hobbies {props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
    );

export default Person;