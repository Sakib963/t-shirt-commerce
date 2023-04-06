import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <div>
        <h2>This is Home</h2>
        <h2>Length: {tShirts.length}</h2>
        </div>
    );
};

export default Home;