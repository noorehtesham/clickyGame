import React from "react";

import "./Wrapper.css";

const Wrapper = props => 
    <div className="wrapper">
        <NavBar></Navbar>
        {props.children}
        
        </div>
export default Wrapper; 