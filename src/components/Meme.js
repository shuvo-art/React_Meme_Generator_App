import React from "react";

export default function Meme() {

    let url

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemeImage(data.data.memes))
    }, [])


/*     React.useEffect(async () => {
        const response = await fetch("https://api.imgflip.com/get_memes")
        const data = await response.json()
        setAllMemeImage(data.data.memes)
    }, []) */

         /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

// For cleaning up Memory like componentWillUnmount

/*     React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemeImage(data.data.memes)
        }
        fetchData()
        return () => {
            console.log("Cleaning up memory")
        }
    }, []) */

    console.log(allMemeImage)

    function getMemoImage() {
        const randomIndex = Math.floor(Math.random() * allMemeImage.length);
        url = allMemeImage[randomIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }));
    }
    return (
        <main>
            <div className="form1">
                <input 
                    className="form--imput1" 
                    type="text" 
                    name="topText" 
                    placeholder="Top Text"
                    value={meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    className="form--input1" 
                    type="text" 
                    name="bottomText" 
                    placeholder="Bottom Text" 
                    value={meme.bottomText} 
                    onChange={handleChange}
                />
                <button onClick={getMemoImage} className="form--button1">Generate a meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image1"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
