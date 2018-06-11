import React from "react";

const NavBar = props => (

<nav className="navbar navbar-light bg-info">
<span className="navbar-brand mb-0 h1">Clicky Game</span>
<span className="navbar-text text-dark font-weight-bold">
  Score: <span>{this.props.score}</span>&nbsp;
  Top Score: <span>{this.props.topScore}</span>
</span>
</nav>

)

export default NavBar; 