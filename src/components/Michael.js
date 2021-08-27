import React from 'react'
import './Michael.css'

const Michael = (props) =>{
    return(
        <div ClassName = "mike">
            <h1>My Info</h1>
            <p>My name is {props.name}, <br/> i am {props.gender}, <br/>my height is {props.height} <br/> i am {props.complextion} in complextion</p>
        </div>
    )
}
export default Michael