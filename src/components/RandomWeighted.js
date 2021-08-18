import React from 'react'

function Random(props){
    const question = props.questionData
    return(
        
        <div>
        <div className='card-back'>
            <div>{question.service}</div>
            <div className='commonality'>{question.common}</div>
        </div>
        <div className= 'card-front'>
            <div>{question.desc}</div> 
           <div> { question.cat}</div> 
          </div>
    </div>
    )
}
export default Random