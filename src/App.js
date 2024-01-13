import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import State from "./components/State";
import Count from "./components/Count";
import AddItem from "./components/AddItem";
import StateCard from "./components/StateCard";

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            <State />
            <Count />
            <AddItem />
            <StateCard />
        </div>
    )
}