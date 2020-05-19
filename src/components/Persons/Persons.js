import React, { PureComponent } from 'react'
import Person from './Person/Person'

//class Persons extends Component { if we use shouldUpdate with specifics Propos

// in case we shouldUpdate aftereach Props Update
class Persons extends PureComponent {

  // static getDerivedStateFromProps (props, state) {
  // console.log('[Persons.js] getDrivedStateFromProps')
  // return state;
  // }
  // componentWillReceiveProps (props) {
  // console.log('[Persons.js] componentWillReceiveProps', props)
  // }

/* in case we use Component

  shouldComponentUpdate (nextProps, nextState) {
    
    // compare two pointer because after evry changes we make a copie of person and after that
    // copie to person with update so update =====> new Pointer
    if (nextProps.persons !== this.props.persons ||
            nextProps.changeNameHandler !== this.props.changeNameHandler ||
            nextProps.deletePerson !== this.props.deletePerson
    ) {
      return true}
    else {
      return false
    }
  }
*/
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
    console.log('[Persons.js] render')
    return this.props.persons.map((person, index) => {
      
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
