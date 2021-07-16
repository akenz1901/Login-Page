import React from 'react'

const Input = (props) =>{
    return(
        <div ClassName = "signin">
            <label htmlFor="fname" className={props.ClassName}>{props.label}</label><br/>
            <input type ="text" id="fname" name="fname" placeholder={props.placeholder}/>   
        </div>
    )
}
export default Input