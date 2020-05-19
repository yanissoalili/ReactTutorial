import React, { useEffect, useContext, useRef } from 'react'
import Styles from './cockpit.module.css'
import AuthContext from '../../context/auth-context'
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)
  useEffect(() => {
    console.log('[cockpit.js] useEffect')
    // setTimeout(() => {
    //   alert('save data to the cloud')
    // }, 1000)
    toggleBtnRef.current.click()
    return () => {
      console.log('[cockpit.js] cleanup work  in use effect')
    }
  }, [])

  useEffect(() => {
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

  if (props.personsLength > 1) {
    classes = [Styles.red, Styles.bold].join(' ')
  }
  return (
    <header className='App-header'>
      <h1> {props.title}</h1>
      <p className={classes}>it's working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.buttonHandleClick}
      >show persons
      </button>

      <button onClick={authContext.login}>logIn</button>


    </header>

  )
}
export default React.memo(Cockpit)
