import React from 'react'

function Multi(props){
    const question = props.questionData;
    console.log(question);
    // const choices = ['a','b','c','d'];
    // const options = question.options.map((options,i)=>{
    //     return (<li>key={i} {choices[i]}. {options}</li>)
    // }) 
    return(
        <div>
            <div className='card-front'>{question.service}</div>
            <div className= 'card-back'>
                 <div>AWS Service</div> 
                  <ul className= 'multi'> {question.data} </ul>
            </div>
        </div>
    )
}
export default Multi