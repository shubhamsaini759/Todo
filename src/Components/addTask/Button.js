import React from "react";
import "./Button.css"; 

const Button = (props) =>{


    return(
        <>
            <button className="btn" onClick={props.click} >Add</button>
            
        </>
    )
}

export default Button;