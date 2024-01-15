import React from "react";

export default function Joke(props) {
    const [shown, setShown] = React.useState(false);


    return (
        <div>
            {props.setup && <h3 onClick={props.showPunchline} className="joke--question">{props.setup}</h3>}
            {shown && <p className="joke--answer">{props.punchline}</p>}
            <button onClick={() => setShown(!shown)}>{shown ? "Hide" : "Show"} Punchline</button>
        </div>
    )
}