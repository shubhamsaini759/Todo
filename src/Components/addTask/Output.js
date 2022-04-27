import React from "react";
import "./Output.css"




const Output = (props) =>{

 

    return (
        <>
        <div className="task">
            <div className="tasks">
            <h3>
                {props.item} 
                {props.del}  

            </h3>
            <span>
                    {props.day}
            </span>
                
           
            </div>
            
        </div>
        
        </>
    )
}
export default Output;