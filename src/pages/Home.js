import React from 'react';
import useFetchTemplates from '../customHooks/useFetchTemplates';

const Home = () => {
    const { fetchTemplates } = useFetchTemplates()
    const callSomething = () => {
        fetchTemplates()
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={callSomething}>magic</button>
        </div>
    )
}

export default Home