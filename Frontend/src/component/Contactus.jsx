import React, { useEffect } from "react";

const contact =()=>{
   
    useEffect(()=>{
        document.title="ContactUs"
    },[]);

    return(
        <div>
            <h3>You Can Simply Contact Us </h3>
            <p>Mobile No: 8380819583</p>
            <p>Email : patilpratham457@gmail.com</p>
        </div>
    )
}

export default contact;