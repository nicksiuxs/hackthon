import React, { useState } from 'react'
import Input from '../../../../components/Input/Input';
import useAppContext from '../../../../customHooks/useAppContext'
import TYPES from '../../../../reducers/types';


const HostInformation = () => {
    const { state: { labels, hostInformation }, dispatch } = useAppContext();
    const [newHost, setNewHost] = useState(hostInformation)

    const { firstName, lastName, email, homePhone, mobilePhone } = newHost;

    const handleOnChangeInput = (e) => {
        setNewHost({ ...newHost, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: TYPES.UPDATE_HOST_INFORMATION, payload: newHost })
    }

    return (
        <div className="panel panel-70">
            <h2 className='title'>{labels.host_information}</h2>
            <form onSubmit={handleOnSubmit}>
                <Input id={"firstName"} value={firstName} label={labels.first_name} handleOnchange={handleOnChangeInput} />
                <Input id={"lastName"} value={lastName} label={labels.last_name} handleOnchange={handleOnChangeInput} />
                <Input id={"email"} value={email} type="email" label={labels.email} handleOnchange={handleOnChangeInput} />
                <Input id={"homePhone"} value={homePhone} label={labels.home_phone} handleOnchange={handleOnChangeInput} />
                <Input id={"mobilePhone"} value={mobilePhone} label={labels.mobile_phone} handleOnchange={handleOnChangeInput} />
                <button className='btn'>{labels.go_to_payment}</button>
            </form>
        </div>
    )
}

export default HostInformation