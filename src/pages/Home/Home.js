import React from 'react';
import AvailabilityFilters from './components/AvailabilityFilters/AvailabilityFilters';
import ListOfTemplates from './components/ListOfTemplates/ListOfTemplates';
import './Home.css';

const Home = () => {
    
    return (
        <div className='panel-container'>
            <AvailabilityFilters />
            <ListOfTemplates />
        </div>
    )
}

export default Home