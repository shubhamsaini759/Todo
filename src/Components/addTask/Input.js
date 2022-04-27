import React from "react";
import { useState } from "react";
import {FaTimes} from 'react-icons/fa'


import Button from "./Button";
import Output from "./Output";


import "./Input.css"

const Input = () =>{


    const [task,setTask] = useState({
        task : "",
        day : ""
    });

    
    
    const [show,setShow] = useState([]);

    const handleInput = (e) =>{
        setTask({...task,[e.target.name] : e.target.value})
    }


    const Outputs = () =>{
        setShow([...show,task])
        setTask("")
        
    };

    const Delete = (x) =>{
            const delItem = show.filter((y,ind) => ind !== x);
            setShow(delItem);
    };

    return (
        <>
                <div className="form-control ">
                    <label>Task</label>
                    <input type="text" placeholder="Add" value={task.data} name="task"  onChange={handleInput} />

                    <label>Day</label>
                    <input type="text" placeholder="Add" value={task.day} name="day" onChange={handleInput} />


                    <Button click={Outputs} />

                    {
                        show.map((x,ind)=> {
                            return(
                            <Output item={x.task} day={x.day}  key={ind} del= {<FaTimes onClick={()=>Delete(ind)}/>} />
                            )
                        })
                    }

                </div>
            
        
        </>
    )
}
export default Input;





