import React from "react";

import "./NavBar.css";

const NavBar = props => (

<nav className="navbar navbar-light bg-info">
<span className="navbar-brand mb-0 h1">Clicky Game</span>
<span className="navbar-text text-dark font-weight-bold">
  Score: <span>{props.score}</span>&nbsp;
  </span>
  <span className="navbar-text text-dark font-weight-bold">
  Top Score: <span>{props.topScore}</span>
</span>
<span className="navbar-text text-dark font-weight-bold message">
  <span>{props.message}</span>
</span>
</nav>

)

export default NavBar; 
