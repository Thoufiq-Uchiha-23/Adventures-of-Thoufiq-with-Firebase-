import React from "react";

const SigninPage = () => {
    return (
        <div>
            <label>Enter your email</label>
            <input type="email" placeholder="Enter your email here" />
            <label>Enter your password</label>
            <input type="password" placeholder="Enter your password here" />
            <button>Sign me in</button>
        </div>
    )
}

export default SigninPage