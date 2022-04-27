import React from "react";
import Header from './Header';
import Input from "./addTask/Input";

import "./container.css"




const Container = () => {
    return(
        <>

        <div className="container">
                <Header />
                <Input />
        </div>  

        </>
    )
}

export default Container;