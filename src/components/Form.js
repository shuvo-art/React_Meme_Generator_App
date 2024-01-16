import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            textArea: ""
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    }
    console.log(formData);

    return (
        <div className="form">
            <form action="" method="POST" id="my-form">
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}