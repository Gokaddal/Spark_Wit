import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai';
import './signUpPage.css';
import { Link, useNavigate } from 'react-router-dom';


function SignUpPage() {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    }

    const handleClose = () => {
        navigate('/login');
    }

    const togglePasswordVisibility = () => {
        setShowPass((prevState) => !prevState);
    }

    return <div className="signUp_page">
        <AiOutlineClose className="close_icon" onClick={handleClose} />
        <h2 className="create_account">Create Account</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className="text_bar" placeholder="First Name" />
            <input type="text" className="text_bar" placeholder="Last Name" />
            <input type="text" className="text_bar" placeholder="Email Address" />
            <input type="text" className="text_bar" placeholder="Phone Number" />
            <div classname="password_container">
                <input type={showPass ? "text" : "password"} id="pwd" className="text_bar" placeholder="Password" />
            </div>
            {showPass ? (<BiSolidHide className="pass_icon" onClick={togglePasswordVisibility} />) :
                (<BiSolidShow className="pass_icon" onClick={togglePasswordVisibility} />)}
            <select name="userType" className="text_bar">
                <option value="" selected disabled>User Type</option>
                <option value="Individual" >Individual</option>
                <option value="Organization">Organization</option>
            </select>
            <button type="submit" className="create_btn">Create Account</button>
        </form>
        {isSubmitted && <p class="success_message">Account created Successfully! Please go back to login Page</p>}
    </div>;
}

export { SignUpPage };