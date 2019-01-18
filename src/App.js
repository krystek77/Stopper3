import React, { Component } from 'react';
import './App.css';
import Reset from './components/Reset'
import SwitchButton from './components/SwitchButton'
import Clock from './components/Clock'

class App extends Component {

  state = {
    active: false,
    time:0
  }
  counter = 0

  handleOnOffStopper() {
    this.setState(()=>({
      active:!this.state.active
    }))
  }

  changeTime=()=>{
    this.setState(()=>({
      time:this.state.time + 1
    }))
  }

  // Called immediately after a component is mounted. Setting state here, will trigger (wyzwoli/uruchomi) re-rendering
  componentDidMount() {
    console.log("Komponent did mount!")
   
  }
  //Called immediately after updating occurs.
  //Wywyoływana bezpośrednio po wystąpieniu uaktualnienia
  componentDidUpdate(){
    console.log('Komponent uaktualniony')
    if(this.state.active && this.state.time === 0){
        this.id = setInterval(this.changeTime,1000)
    } else if(this.state.active && this.state.time !== 0){
        clearInterval(this.id)
        this.id = setInterval(this.changeTime,1000)
    }else {
        console.log("Stop stopper")
        clearInterval(this.id)
    }
  }

  handleResetStopper=()=>{
    this.setState({
      time:0,
      active:false,
    })
  }
  // Not necessary in this app
  componentWillUnmount(){
    console.log("Komponent usunięty z DOM");
    clearInterval(this.id)
  }

  render() {
    
    console.log(`RENDER NR: ${++this.counter}`);
    return (
      <div className="clock">
        <h1>Stopper</h1>
        <Clock time={this.state.time}/>
        <SwitchButton onOff = {this.handleOnOffStopper.bind(this)} active={this.state.active}/>
        <Reset resetStopper={this.handleResetStopper}/>
      </div>
    );
  }
}

export default App;
