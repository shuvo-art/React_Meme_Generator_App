import React from "react";

export default function AddItem() {
    const [items, setItems] = React.useState(["Item 1", "Item 2", "Item 3"]);

    function addItem() {
        setItems(prevItems => {
            return [...prevItems, `Item ${prevItems.length + 1}`];
        });
    }
    const itemElement = items.map(item => <p>{item}</p>);
    return (
        <div className="add-itm">
            <button onClick={addItem} className="add-itm--button">Add Item</button>
            {itemElement}
        </div>
    )
}