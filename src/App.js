import React , {Component} from 'react'
import './App.css';
import Quizbar from './components/Quizbar'
import Flashcard from './components/FlashCard';


class App extends Component {
  constructor(){
    super()
    this.state = {
      cardStyle : 'Random',
      ready:false,
    }
  }

userChoice = (cardStyle) =>{
  this.setState({
    cardStyle, 
    ready : false,
  })
 

}

nowReady = ()=>{
  this.setState({
    ready :true,  
  })
  
}
  render(){
    console.log(this.state.cardStyle)
  return (
  <div className= 'App align-items-center d-flex'>
    <div className= 'container'>
    <Quizbar userChoice={this.userChoice} />
    <Flashcard cardStyle ={this.state.cardStyle} nowReady={this.nowReady} ready={this.state.ready}/>
    </div>
    
  </div>
  )};
}

export default App;
