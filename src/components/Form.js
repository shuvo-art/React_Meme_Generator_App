import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            textArea: "",
            checkbox: false,
            radio: "",
            favFruit: ""
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit} id="my-form">
                <label htmlFor="first-name">First Name:</label>
                <input onChange={handleChange} value={formData.firstName} type="text" id="first-name" name="firstName" placeholder="First Name" />
                <br />
                <label htmlFor="last-name">Last Name:</label>
                <input onChange={handleChange} value={formData.lastName} type="text" id="last-name" name="lastName" placeholder="Last Name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" placeholder="Email" />
                <br />
                <textarea onChange={handleChange}  value={formData.textArea} name="textArea" id="text-area" className="textarea" cols="30" rows="10" placeholder="Text Area" />
                <br />
                <input onChange={handleChange} value={formData.checkbox} type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Is this Friedly ?</label>
                <br />
                <fieldset>
                    <legend>Current employment status</legend>
                    <input onChange={handleChange} value="Employed" checked={formData.radio === "Employed"} type="radio" name="radio" id="employed" />
                    <label htmlFor="employed">Employed</label>
                    <br />
                    <input onChange={handleChange} value="Unemployed" checked={formData.radio === "Unemployed"} type="radio" name="radio" id="unemployed" />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input 
                        type="radio" 
                        id="part-time" 
                        name="radio" 
                        value="Part-Time" 
                        checked={formData.radio === "Part-Time"} 
                        onChange={handleChange}                     //Standard format of form handling
                    />
                    <label htmlFor="part-time">Part-Time</label>
                </fieldset>
                <br />
                <label htmlFor="fav-fruit">Choose a fruit:</label>
                        <select 
                            id="fav-fruit"
                            name="favFruit"
                            value={formData.favFruit}
                            onChange={handleChange} 
                        >
                            <option value="">--Chose Fruit--</option>    
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="orange">Orange</option>
                            <option value="grape">Grape</option>
                        </select>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}