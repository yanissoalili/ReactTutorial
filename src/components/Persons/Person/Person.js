import React, { Component } from 'react'
import Styles from './person.module.css'
import Aux from '../../../hoc/Auxilary'
import withClass from '../../../hoc/withClass'
import propTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'
class Person extends Component {
  constructor (props) {
    super(props)
    this.inputElementref = React.createRef()
  }
  static contextType=AuthContext;

  componentDidMount () {
    this.inputElementref.current.focus()
    console.log(this.context.authenticated)
  }

  render () {
    console.log('[Person.js] render')
    // we can also use context afetr using static contextType
    return (
      <Aux>
        <AuthContext.Consumer>{
        context => context.authenticated ? <p>Authenticated</p> : <p> please Login</p>}</AuthContext.Consumer>
        <p onClick={this.props.handleClick}>

                I'm person {this.props.name} and my age {this.props.age}
        </p>

        <input
          // old Version  ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementref}
          onChange={this.props.handleChange}
        />

      </Aux>
    )
  }
}
Person.propTypes = {
  handleClick: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  handleChange: propTypes.func
}
export default withClass(Person, Styles.person)
