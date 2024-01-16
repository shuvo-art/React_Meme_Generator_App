import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

/* document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const {firstName, lastName} = formElements;
    submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value
    })
})

function submitViaAPI(data) {
    console.log(data);
}    Vanila-Javascript*/

ReactDOM.render(<App />, 
            document.getElementById("root"));