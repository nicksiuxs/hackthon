import React from 'react';
import AvailabilityFilters from './components/AvailabilityFilters/AvailabilityFilters';
import TemplateResults from './components/TemplateResults/TemplateResults';
import './Home.css';

const Home = () => {
    
    return (
        <div className='panel-container'>
            <AvailabilityFilters />
            <TemplateResults />
        </div>
    )
}

export default Home