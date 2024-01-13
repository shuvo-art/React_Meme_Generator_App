import React from "react";

export default function Star(props) {
    let starIcon = props.isempty ? "microsoft-edge.png" : "microsoft-edge-new.png";
    return (
    <img 
        onClick={props.handleClick} 
        src={process.env.PUBLIC_URL + '/images/' + starIcon} 
        className="card--favorite" 
    />)
}