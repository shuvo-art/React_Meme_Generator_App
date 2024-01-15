import React from "react";

export default function Box(props) {

    const styles ={
        backgroundColor: props.box ? "#222222" : "transparent"
    }
    
    return (
        <div className="box" style={styles} onClick={props.toggle}></div>
    )
}