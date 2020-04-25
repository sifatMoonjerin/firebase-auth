import React from 'react';
import app from '../firebase';

const Home = () => {
    return (
        <div>
            <h2>Welcome Home!</h2>
            <button onClick={()=> app.auth().signOut()}>Sign Out</button>
        </div>
    );
};

export default Home;