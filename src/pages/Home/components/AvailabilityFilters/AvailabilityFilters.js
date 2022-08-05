import React from 'react';
import useFetchTemplates from '../../../../customHooks/useFetchTemplates';

const AvailabilityFilters = () => {
    const { fetchTemplates } = useFetchTemplates()
    const callSomething = () => {
        fetchTemplates()
    }

  return (
    <div className='panel panel-50'>
        <button onClick={callSomething}>magic</button>
    </div>
  )
}

export default AvailabilityFilters