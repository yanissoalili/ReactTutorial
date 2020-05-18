import React, { Component } from 'react'
import Person from './Person/Person'
class Persons extends Component {
  // static getDerivedStateFromProps (props, state) {
  // console.log('[Persons.js] getDrivedStateFromProps')
  // return state;
  // }
  // componentWillReceiveProps (props) {
  // console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[Persons.js] should component update')
    // compare two pointer because after evry changes we make a copie of person and after
    // that copie to person with update so update =====> new Pointer
    return nextProps.person !== this.props.person
  }
  
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('[Persons.js] get snapshot before updating')
    return { message: 'Snapshot' }
  }
  // componentWillUpdate(){
  // }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('[Persons.js] did update')
    console.log(snapshot)
  }

  render () {
    return this.props.persons.map((person, index) => {
      console.log('[Persons.js] render')
      return (<Person
        name={person.name}
        age={person.age}
        handleClick={() => this.props.deletePerson(index)}
        key={person.id}
        handleChange={(event) => this.props.changeNameHandler(event, person.id)}
              />
      )
    })
  }
}

export default Persons
