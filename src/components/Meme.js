import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let url
    function getMemoImage() {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomIndex].url;
    }
    return (
        <main>
            <div className="form">
                <input className="form--text" type="text" name="topText" placeholder="Top Text" />
                <input className="form--text" type="text" name="bottomText" placeholder="Bottom Text" />
                <button onClick={getMemoImage} className="form--button">Generate a meme image</button>
                <p>{url}</p>
            </div>
        </main>
    )
}
