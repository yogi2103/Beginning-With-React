import React from 'react';

const Person = (props) => (
            <p>I'm a {props.name} and {props.age} years old and hobbies {props.children}</p>
    );

export default Person;