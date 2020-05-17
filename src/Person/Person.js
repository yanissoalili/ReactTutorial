import React from 'react';
import './person.css';
const person = (props) => {
   
    return (
        <div className="person">
            <p onClick={props.click}>
                I'm person {props.name} and my age {props.age}
            </p>

            <input onChange={props.changed}/>

        </div>
);
}
export default person;