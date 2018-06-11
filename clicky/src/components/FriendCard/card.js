import React from "react";

const Card = props => (
    <div className="card">
        <div onClick={this.props.handleClick} className="img-container">
            <img alt={this.props.key} src={this.props.image}/>
        </div>
    </div>
    
);

export default Card;
