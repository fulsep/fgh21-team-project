import React from 'react'

function Input(props) {
    return(
    <>
        <input type={props.type} className='border-2 border-black font-bold rounded-lg pl-3 p-2' placeholder={props.placeholder}/>
    </>
    )
}
export default Input

//name
//email
//message