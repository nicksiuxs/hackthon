import React from 'react'
import Input from '../../../../../components/Input/Input';
import useAppContext from '../../../../../customHooks/useAppContext'
import TYPES from '../../../../../reducers/types';

const PersonalInformation = () => {
  const { state: { labels, payment }, dispatch } = useAppContext();

  // payment fields
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zipCode,
    country
  } = payment;

  const onChange = (e) => {
    const field = {
        [e.currentTarget.name]: e.currentTarget.value
    }
    dispatch({ type: TYPES.UPDATE_PAYMENT_INFORMATION, payload: field});
  }

  return (
    <div>
        <h2 className='title'>{labels.personal_information}</h2>
        <form>
            <Input id={"firstName"} value={firstName} label={labels.first_name} handleOnchange={onChange} />
            <Input id={"lastName"} value={lastName} label={labels.last_name} handleOnchange={onChange} />
            <Input id={"email"} value={email} type="email" label={labels.email} handleOnchange={onChange} />
            <Input id={"phone"} value={phone} type="phone" label={labels.phone} handleOnchange={onChange} />
            <Input id={"address"} value={address} type="address" label={labels.address} handleOnchange={onChange} />
            <Input id={"city"} value={city} label={labels.city} handleOnchange={onChange} />
            <Input id={"state"} value={state} label={labels.state} handleOnchange={onChange} />
            <Input id={"zipCode"} value={zipCode} label={labels.zip} handleOnchange={onChange} />
            <Input id={"country"} value={country} label={labels.country} handleOnchange={onChange} />
        </form>
    </div>
  )
}

export default PersonalInformation