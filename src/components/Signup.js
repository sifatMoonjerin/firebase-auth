import React, { useCallback, useContext } from 'react';
import app from '../firebase';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from './Auth';
import { Link } from 'react-router-dom';

const Signup = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try{
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push('/')
        } catch(error) {
            alert(error)
        }
    }, [history])

    const { currentUser } = useContext(AuthContext)

    if(currentUser){
        return <Redirect to="/" />
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>
                <br/>
                <Link to="/login">Already have an account</Link>
            </form>
        </div>
    );
};

export default withRouter(Signup);