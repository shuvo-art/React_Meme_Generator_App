import React from "react";

export default function Box(props) {
    const [box, setBox] = React.useState(props.box);

    const styles ={
        backgroundColor: box ? "#222222" : "transparent"
    }
    
    function toggleColor() {
        setBox(prevBox => !prevBox);
    }

    return (
        <div onClick={toggleColor} className="box" style={styles}></div>
    )
}