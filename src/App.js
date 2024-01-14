import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import State from "./components/State";
import Count from "./components/Count";
import AddItem from "./components/AddItem";
import StateCard from "./components/StateCard";
import Box from "./components/Box";
import boxes from "./boxes";

export default function App() {
    const [boxs, setBox] = React.useState(boxes);
    const boxComponents = boxs.map(box => (
        <Box box={box.on} key={box.id}/>
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
        </div>
    )
}