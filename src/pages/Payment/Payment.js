import React from 'react';
import Summary from './components/Summary/Summary';
import ClientInformation from './components/ClientInformation/ClientInformation';

const Payment = () => {
    return (
        <div className='panel-container'>
            <ClientInformation/>
            <Summary />
        </div>
    )
}

export default Payment