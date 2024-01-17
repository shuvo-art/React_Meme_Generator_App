import React from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function handleSize() {
            console.log("resizing");
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleSize);
        return () => {
            console.log("Cleaning up memory or resizing")
            window.removeEventListener("resize", handleSize);
        }
    }, [])

    return (
        <h1>Window Width: {windowWidth}</h1>
    )
}