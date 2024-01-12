import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import State from "./components/State";
import Count from "./components/Count";

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            <State />
            <Count />
        </div>
    )
}