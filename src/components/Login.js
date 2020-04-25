import React, { useCallback, useContext } from 'react';
import { AuthContext } from './Auth';
import { Redirect, withRouter } from 'react-router';
import app from '../firebase';
import { Link } from 'react-router-dom';

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const { email, password} = event.target.elements
            try{
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                alert(error)
            }
        },
        [history]
    )

    const { currentUser } = useContext(AuthContext)

    if(currentUser){
        return <Redirect to="/" />
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <br/>
                    <input name="email" type="email" placeholder="Email" />
                    <br/>
                </label>
                <label>
                    Password
                    <br/>
                    <input name="password" type="password" placeholder="Password" />
                    <br/>
                </label>
                <button type="submit">Log in</button>
                <br/>
                <Link to="/signup">Create a new account</Link>
            </form>
        </div>
    );
};

export default withRouter(Login);