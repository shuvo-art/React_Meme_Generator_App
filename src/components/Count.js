import React from "react";

export default function Count() {
    const [count, setCount] = React.useState(0);

    function add() {
        setCount(count + 1);
    }

    function subtract() {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <button onClick={subtract} className="counter--minus">-</button>
            <div className="counter--number">
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}