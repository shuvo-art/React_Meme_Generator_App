import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import State from "./components/State";
import Count from "./components/Count";
import AddItem from "./components/AddItem";
import StateCard from "./components/StateCard";
import Box from "./components/Box";
import boxes from "./boxes";
import jokesData from "./jokesData";
import Joke from "./components/Joke";
import Form from "./components/Form";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

export default function App() {
    const [boxs, setBoxs] = React.useState(boxes);

    function toggle(id) {
        setBoxs(prevBoxs => {
            return prevBoxs.map(box => {
                return box.id === id ? {...box, on: !box.on} : box
            })
        })
    }

    const boxComponents = boxs.map(box => (
        <Box box={box.on} key={box.id} toggle={() => toggle(box.id)} />
     ))

    const [jokes, setJokes] = React.useState(jokesData);

    function showPunchline(id) {
        console.log("Clicked!");
    }

    const jokeComponents = jokesData.map(joke => (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} showPunchline={() => showPunchline(joke.id)} />
    ))
    return (
        <div>
            <Header />
            <Meme />
            <State />
            <Count />
            <AddItem />
            <StateCard />
            {boxComponents}
            {jokeComponents}
            <Form />
            <Footer />
            <SignUp />
        </div>
    )
}