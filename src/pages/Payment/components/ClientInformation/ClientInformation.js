import React from 'react';
import useAppContext from '../../../../customHooks/useAppContext';
import usePayRental from '../../../../customHooks/usePayRental';
import CardInformation from './CardInformation/CardInformation';
import PersonalInformation from './PersonalInformation/PersonalInformation';

const ClientInformation = () => {

  const { state: { summary } } = useAppContext();
  const { doPayment } = usePayRental();

  return (
    <div className='panel panel-70'>
      <PersonalInformation />
      <CardInformation />
      <button
        className='btn'
        onClick={() => doPayment()}
      >
        Pay ${summary.total}
      </button>
    </div>
  )
}

export default ClientInformation