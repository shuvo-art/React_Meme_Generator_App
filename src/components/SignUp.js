import React from "react";

export default function SignUp() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            checkbox: false
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
        const check = formData.password === formData.confirmPassword ? "Successfully signed up" : "Password didn't match"
        console.log(check)
        console.log(formData.checkbox ? "Thanks for signing up for the newsletter" : "")
        console.log(formData)
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="email" 
                name="email" 
                className="form--input"
                placeholder="Email address"
                value={formData.email} 
                onChange={handleChange}
            />
            <br />
            <input 
                type="text" 
                id="password" 
                name="password" 
                className="form--input"
                placeholder="Password"
                value={formData.password}  
                onChange={handleChange}
            />
            <br />  
            <input 
                type="text" 
                id="confirmPassword" 
                name="confirmPassword" 
                className="form--input"
                placeholder="Confirm Password"
                value={formData.confirmPassword} 
                onChange={handleChange}
            />
            <br />    
            <div className="form--marketing">
                <input 
                    onChange={handleChange} 
                    value={formData.checkbox} 
                    type="checkbox" 
                    name="checkbox" 
                    id="checkbox" 
                />
                <label htmlFor="checkbox">I want to join the newsletter</label>
            </div>
            <br />
            <button className="form--submit">Sign up</button>
            </form>
        </div>
    )
}