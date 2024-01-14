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
    const [boxs, setBoxs] = React.useState(boxes);

    function toggle(id) {
        setBoxs(prevBoxs => {
            return prevBoxs.map(box => {
                return box.id === id ? {...box, on: !box.on} : box
            })
        })
    }

    const boxComponents = boxs.map(box => (
        <Box box={box.on} key={box.id} id={box.id} toggle={toggle} />
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