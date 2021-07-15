import React, {useState } from 'react'

const Button = (props) =>{
    // // const = {title, height, color, width, isOutline, isAlt} = props
    // const borderOutline = `1px solid %{color}`
    const btn_style = {
        color: props.color,
        backgroundColor:props.backgroundColor,
        border: `1px solid ${props.border}`,
        height: props.height
        // height = props.height,
        // width = props.width,
        // boxRadius = props.boxRadius,
        // display = 'block',
        // fontSize = '15px',
        // border = props.border
        // // boxShadow = 

    }
    
    const [state, setState] = useState(false)

    const updateState = () => {
        setState(!state)
        console.log(state)
    }
        
    return(
        <button onClick={updateState} className="btn" style={btn_style}>{props.Button}</button>
    )
}
export default Button