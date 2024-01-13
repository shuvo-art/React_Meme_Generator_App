import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let url

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memesData)

    function getMemoImage() {
        const memesArray = allMemeImage.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                <input className="form--text" type="text" name="topText" placeholder="Top Text" />
                <input className="form--text" type="text" name="bottomText" placeholder="Bottom Text" />
                <button onClick={getMemoImage} className="form--button">Generate a meme image</button>
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </main>
    )
}
