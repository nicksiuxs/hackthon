import React from 'react'
import HostInformation from './components/HostInformation/HostInformation'
import TemplateInformation from './components/TemplateInformation/TemplateInformation'

const Register = () => {
    return (
        <div className='panel-container'>
            <TemplateInformation />
            <HostInformation />
        </div>
    )
}

export default Register