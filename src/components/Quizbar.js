import React  from 'react'
import QuizType from './QuizType'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDumbbell,faFont, faFileAlt, faDice } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'

// library.add(faDumbbell,faFont, faFileAlt, faDice)


const quizArray = [
    {icon: 'dice',
type:'Random'},
{icon:'file-alt', type:'Multi'},
{icon : 'dumbbell' ,type:'Weighted' },
{icon:'font' , type:'Regular'},
]


function Quizbar(props){
    const quiztype = quizArray.map((qt,i )=>{
        return (
        <QuizType key={i} icon = {qt.icon} type={qt.type}userChoice ={props.userChoice}/>)
    })
    return (
        <div className='quizbar'>
            <h1>Choose your study type </h1>
            
            <ul className = 'nav nav-pills nav-fill'>
             {quiztype}
       
            </ul>
        </div>
    ) 
}
export default Quizbar