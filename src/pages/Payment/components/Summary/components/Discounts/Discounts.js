import React from 'react'
import useAppContext from '../../../../../../customHooks/useAppContext'

const Discounts = () => {
  const { state: { labels } } = useAppContext();
  return (
    <div>
        <h2>{labels.add_discount}</h2>
        <input type="text" placeholder={labels.discount_code}/>
        <button>{labels.apply_code}</button>
    </div>
  )
}

export default Discounts