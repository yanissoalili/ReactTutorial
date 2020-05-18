import React, { Component } from 'react'
import Styles from './person.module.css'
class Person extends Component {

  render () {
    console.log('[Person.js] render');
    return (

      <div className={Styles.person}>
        <p onClick={this.props.handleClick}>

                I'm person {this.props.name} and my age {this.props.age}
        </p>

        <input onChange={this.props.handleChange} />

      </div>
    )}
}
export default Person;
