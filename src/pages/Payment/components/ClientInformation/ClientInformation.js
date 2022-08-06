import React from 'react';
import useAppContext from '../../../../customHooks/useAppContext';
import usePayRental from '../../../../customHooks/usePayRental';
import CardInformation from './CardInformation/CardInformation';
import PaymentButton from './PaymentButton/PaymentButton';
import PersonalInformation from './PersonalInformation/PersonalInformation';

const ClientInformation = () => {

  return (
    <div className='panel panel-70'>
      <PersonalInformation />
      <CardInformation />
      <PaymentButton />
    </div>
  )
}

export default ClientInformation