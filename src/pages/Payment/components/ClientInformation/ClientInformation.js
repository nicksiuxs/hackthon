import React from 'react';
import useAppContext from '../../../../customHooks/useAppContext';
import CardInformation from './CardInformation/CardInformation';
import PersonalInformation from './PersonalInformation/PersonalInformation';

const ClientInformation = () => {

  const { state: { summary } } = useAppContext();
  return (
    <div className='panel panel-70'>
      <PersonalInformation />
      <CardInformation />
      <button>Pay ${summary.total}</button>
    </div>
  )
}

export default ClientInformation