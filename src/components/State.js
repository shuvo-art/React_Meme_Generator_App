import React from "react";

export default function State() {
    const [isImportant, func] = React.useState("Yes");

    function handleClick() {
        func("No");
    }
    
    return (
        <div className="state">
            <h1 className="state-title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--text">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}