import React from "react";

const FriendCard = props => (
    <div className="card">
        <div onClick={props.CheckImage} className="img-container">
            <img alt={props.key} src={props.image}/>
        </div>
    </div>
    
);

export default FriendCard;
