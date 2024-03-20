// import React, { useState } from 'react';

// import { useDispatch } from 'react-redux'; // 导入 useDispatch 来派发 Redux
// cation
import { useNavigate } from 'react-router-dom';

import "./index.css";

function Form() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [rememberMe, setRememberMe] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');


    const navigate = useNavigate();
    //dispatch

    const handleLogin = async (event) => {
        // event.preventDefault();
        // try{

        // }
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" 
                    // value={email} onChange={(event) => setEmail(event.target.value)} 
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" 
                    // value={password} onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" 
                    // checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} 
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
                {/* {errorMessage && <p className='error-message'>{errorMessage}</p>} */}
            </form>
        </section>



    );
}

export default Form;