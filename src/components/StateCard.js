import React from "react";
import Star from "./Star";

export default function StateCard() {
    const [card, setCard] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "123-456-7890",
        email: "johndoe@gmail.com",
        isFavourite: false 
    })

    function toggleFavorite() {
        setCard(prevCard => {
            return {
                ...prevCard,
                isFavourite: !prevCard.isFavourite
            }
        })
    }
    return (
        <main>
            <article className="card">
                <img src={process.env.PUBLIC_URL + '/images/shuvo_fb1.jpg'} className="card--image" />
                <div className="card--info">
                    <Star isempty={card.isFavourite} handleClick={toggleFavorite}/>
                    <h2 className="card--name">{card.firstName} {card.lastName}</h2>
                    <p className="card--contact">{card.phone}</p>
                    <p className="card--contact">{card.email}</p>
                </div>
            </article>
        </main>
    )
}