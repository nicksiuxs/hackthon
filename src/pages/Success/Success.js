import React from 'react'
import useAppContext from '../../customHooks/useAppContext';
import TYPES from '../../reducers/types';
import './Success.css';

const Success = () => {

  const { state: { labels, template}, dispatch } = useAppContext();

  const restartFlow = () => {
    dispatch({type: TYPES.RESET_STATE})
  }

  return (
    <div className='success-page'>
        <p className='message'>
            {labels.successful_operation} <b>{template.name}</b>
        </p>
        <p className='continue' onClick={() => restartFlow()}>
            {labels.continue_shopping}
        </p>
    </div>
  )
}

export default Success