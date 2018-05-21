var React = require('react');
var ReactDOM = require('react-dom');
//import {Timeslot} from './timeslot.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';

 
export class Details extends React.Component{
  constructor(props){
    super(props);
 const {foo} = this.props.location.state ;   
     if(localStorage.getItem(foo)) {
      this.state = JSON.parse(localStorage.getItem(foo));
       
    }           
    
    else {
      this.state ={
      fname:'',
      lname:'',
      phoneNum:''
    };

  }
}
   

onChangeHandler(event){
  const state = this.state
    state[event.target.name] = event.target.value; 
  this.setState(state);
         
    
  }
onSubmit(event){
  
   localStorage.setItem(this.props.location.state.foo, JSON.stringify(this.state));
   localStorage.setItem(this.props.location.state.name,JSON.stringify("red"));
  

}
  
  render(){  

    return (
      <div style={{ marginTop:'100px'}}>
      <center>
        <label>FirstName </label>
        <input type="text" name="fname" value={this.state.fname} required onChange={this.onChangeHandler.bind(this)}/>
        <br/><br/>
        <label> LastName </label>
        <input type = "text" name="lname" value={this.state.lname} required onChange={this.onChangeHandler.bind(this)}/>
        <br/><br/>
        <label> PhoneNum </label>
        <input type="text" name="phoneNum" value={this.state.phoneNum}  required onChange={this.onChangeHandler.bind(this)}/>
        <br/><br/>

       <Link to={{ pathname: "/" }}><button type="submit" style={{marginRight:'7px'}} onClick={this.onSubmit.bind(this)}>Submit</button></Link>
              
       <Link to ="/"><button type="submit" style={{ display:'inline-block',marginRight:'-59px'}}>Cancel</button></Link>


      </center>
       </div> 
     
    );
  }
}




