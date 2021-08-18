import React, {Component} from 'react'
// import QuizType from './QuizType'
import Multi from './MultiCard'
import Random from './RandomWeighted'
import Regular from './Regular'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faSpinner);

class Flashcard extends Component{
    constructor(){
        super();
        this.apiHostRoot=`https://aws-services.robertbunch.dev/services`
        this.state = {
            flipClass:'',
            questionData: '',
            
            
        }
    } 
  
 flip = (e) =>{
     let newFlip = this.state.flipClass === '' ? 'flip':''
     this.setState({
         flipClass: newFlip
     })
 }
 newCard = () =>{
     let path;
     console.log(this.props.cardStyle);
     const cardStyle = this.props.cardStyle;
     if((cardStyle==='Random')||(cardStyle ==='Regular')){
         path = this.apiHostRot+'/multi'
     }
     else if (cardStyle==='Multi'){
        path = 'https://aws-services.robertbunch.dev/services/multi'
     }
    else{ 
        path = this.apiHostRot+'/multi'
    }


     path = this.apiHostRoot+'/all'
     axios.get(path).then((response)=>{
         console.log(response.data);
         this.setState({
             questionData : response.data,
            
         })
          this.props.nowReady();
     })
 }
 componentDidMount(){
    //  this.newCard()
 }
    render()
    
       
    {

        if(!this.props.ready){
            console.log(`spinner`)
            this.newCard();
            return(
                <div className = 'spinner-wrapper'>
                    <FontAwesomeIcon icon ='spinner' size = '6x' spin/>
                </div>
            )
        }
   
        const cardStyle = this.props.cardStyle;
        let card;
        if (cardStyle ==='Multi'){
            card =    <Multi questionData= {this.state.questionData} />
        }
        else if (cardStyle==='Weighted'){
            card =   <Regular questionData= {this.state.questionData} />
        }
        else  {
          card =  <Random questionData= {this.state.questionData} />
        }
        return(
            <div >
                <div className= 'row align-items-center card-holder'>
                  <div onClick = {this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                  {card}
                  </div>
                  
                </div>
                <button onClick = {this.newCard}>NEXT </button>
            </div>


        )
    }
}
 export  default Flashcard