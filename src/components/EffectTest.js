import React from "react";

export default function EffectTest() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);
  
    React.useEffect(() => {
        console.log("useEffect called");
        fetch(`https://swapi.dev/api/people/${count}/`)
            .then(response => response.json())
            .then(data => setStarWarsData(data))
    }, [])

    return (
        <div className="effect">
            <h1 className="effect-title">Effect Test</h1>
            <div className="effect--text">
                <h1>{count}</h1>
            </div>
            <button onClick={() => setCount(count + 1)} className="effect--plus">Add</button>
            <div>
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
        </div>
    )
}