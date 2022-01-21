import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function User() {
    return (
        <div>
            <Header />
            <div className="user">
                <div className="login">
                    <div class="heading">
                        <h2>Login to your account</h2>
                    </div>
                    <form action="/login" method="post">
                        <input placeholder="Email Address" name="loginEmail" type="email"/>
                        <input placeholder="Account Password" name="loginPassword" type="password"/>
                        <button className="btn">Login</button>
                    </form>
                </div>
                <div className="register">
                    <div class="heading">
                        <h2>Register</h2>
                        <p>Dont have an account? Lets get you registered</p>
                    </div>
                    <form action="/register" method="post">
                        <input placeholder="Your Full Name" name="registerFullName" type="text"/>
                        <input placeholder="Email Address" name="registerEmail" type="email"/>
                        <input placeholder="Password" name="registerPassword" type="password"/>
                        <button className="btn">Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default User;