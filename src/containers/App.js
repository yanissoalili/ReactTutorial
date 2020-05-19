import React, {  Component } from 'react';
import Css from './App.module.css';
import Persons from'../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxilary';
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');  

  }
  state={
    persons:[
      {id:"de;kb;lkz;",name:'yanis',age:24},
      {id:"312343",name:'anis',age:25}
  ],
  showPerson:false,
  showCockpit: true,
  changeCount:0,
  authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] getDrivedStateFrom Props ${props}`);
    return state;

  }
  /*
  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }*/
  componentDidMount() {
    console.log('[app.js] did Mount');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate ');
    return true
    
  }
  componentDidUpdate(){
    console.log('[App.js] did update');
    
  }

  changeNameHandler = (event, id) =>{
      
      const personIndex = this.state.persons.findIndex( p =>{
        
        return p.id === id;
        
      });
      const person ={...this.state.persons[personIndex]};
      person.name = event.target.value;
      console.log(person.name)
      const persons = [...this.state.persons];
      persons[personIndex]=person;
      console.log(persons);
      
      this.setState((prevState, props) => {
        return{
        persons: persons,
        changeCount : prevState.changeCount +1 };
      });
     
    }
 
    deletePerson = (personIndex) =>{
      //const persons = personState.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({
        persons: persons
      });
      
    }
    buttonHandleClick = () =>{
      this.setState({
        persons:this.state.persons,
        showPerson : ! this.state.showPerson
      });
      
    }
    loginHandler= () => {
      this.setState({
        authenticated : true
      })
    }
    render(){
      console.log(`[app.js] render`);
    let persons = null;
    
    if(this.state.showPerson){
      persons = (<div>
        
        <Persons
        persons = {this.state.persons}
        changeNameHandler ={this.changeNameHandler}
        deletePerson = {this.deletePerson}
        />
        </div>

      );
    
      
    }
   
  
    return (
      
      <Aux classes={Css.App}>
        <button 
        onClick = {() => this.setState({showCockpit : ! this.state.showCockpit})}
        >
          remove cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login : this.loginHandler
        }} >
          {this.state.showCockpit  ? 
          <Cockpit
            title = {this.props.appTitle}
            showPerson ={this.state.showPerson}
            personsLength = {this.state.persons.length}
            buttonHandleClick = {this.buttonHandleClick}
        /> :null } 
         {persons}
        </AuthContext.Provider>
      </Aux>
      
    );
    }
    
}

export default withClass(App, Css.App);