import React from 'react'
import useAppContext from '../../../../../customHooks/useAppContext'
import Input from '../../../../../components/Input/Input';
import TYPES from '../../../../../reducers/types';

const CardInformation = () => {
  const { state: { labels, payment }, dispatch } = useAppContext();
  const {
    cardholderName,
    cardNumber,
    expDate,
    cvc,
    //includeFee TODO
  } = payment;

  const onChange = (e) => {
    const field = {
      [e.currentTarget.name]: e.currentTarget.value
    }
    dispatch({ type: TYPES.UPDATE_PAYMENT_INFORMATION, payload: field });
  }

  return (
    <div>
      <h2 className='title'>{labels.card_information}</h2>
      <form>
        <Input id={"cardholderName"} value={cardholderName} label={labels.cardhold_name} handleOnchange={onChange} />
        <Input id={"cardNumber"} value={cardNumber} type="number" label={labels.card_number} handleOnchange={onChange} className={"input-icon"} />
        <Input id={"expDate"} value={expDate} type="date" label={labels.exp_date} handleOnchange={onChange} />
        <Input id={"cvc"} value={cvc} type="number" label="CVC" handleOnchange={onChange} />
      </form>
    </div>
  )
}

export default CardInformation