import React, { useEffect } from 'react'
import Styles from './cockpit.module.css'
const Cockpit = (props) => {
  useEffect(() => {
    console.log('[cockpit.js] useEffect')
    setTimeout(() => {
      alert('save data to the cloud')
    }, 1000)
    return () => {
      console.log('[cockpit.js] cleanup work  in use effect')
    }
  }, [])

  useEffect( () => {
    console.log('[cockpit.js] 2nd useEffect')
    return () => {
      console.log('[cockpit.js] cleanup work  in 2nd use effect')
    }
  })
  let classes = []
  let btnClass = ''
  if (props.showPerson) {
    btnClass = Styles.red
  }

  if (props.persons.length > 1) {
    classes = [Styles.red, Styles.bold].join(' ')
  }
  return (
    <header className='App-header'>
      <h1> {props.title}</h1>
      <p className={classes}>it's working</p>
      <button
        className={btnClass}
        onClick={props.buttonHandleClick}
      >show persons
      </button>

    </header>

  )
}
export default Cockpit
