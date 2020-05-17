import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonState] = useState({
    persons:[
      {id:"de;kb;lkz;",name:'yanis',age:24},
      {id:"312343",name:'anis',age:25}
  ],
  showPerson:false
  });
  const style = {
    backgroundColor:'green',
    color:'white',
    font: 'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer',
    
  };
    const changeNameHandler = (event, id) =>{
      const personIndex = personState.persons.findIndex( p =>{
        return p.id === id;
        
      });
      const person ={...personState.persons[personIndex]};
      person.name = event.target.value;
      const persons = [...personState.persons];
      persons[personIndex]=person;
      setPersonState({
        persons: persons,
      showPerson:personState.showPerson
      });
    }
 
    const deletePerson = (personIndex) =>{
      //const persons = personState.persons.slice();
      const persons = [...personState.persons];
      persons.splice(personIndex, 1);
      setPersonState({
        persons: persons,
        showPerson: personState.showPerson
      });
      
    }
    const buttonHandleClick = () =>{
      setPersonState({
        persons:personState.persons,
        showPerson : ! personState.showPerson
      });
      
    }
    
    let persons = null;
    if(personState.showPerson){
      persons = (<div>
        {personState.persons.map((person, index) =>{
          return <Person
          name ={person.name} 
         age ={person.age}
         click={() => deletePerson(index)}
         key = {person.id}
         changed={(event) => changeNameHandler(event, person.id)}
          />
        })}
        
        </div>

      );
      style.backgroundColor='red';
      
    }
    let classes=[];
    if(personState.persons.length >1)
    {
    classes =['red', 'bold'].join(' ');}
    return (
      
      <div className="App">
        <header className="App-header">
          <h1> hello it's me</h1>
          <p className={classes}>it's working</p>
          <button
          style={style}
          onClick= {buttonHandleClick}>show persons</button>
          {persons}
          
        </header>
        
      </div>
      
    );
    
}

export default App;