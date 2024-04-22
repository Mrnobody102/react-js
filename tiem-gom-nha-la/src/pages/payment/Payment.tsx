import React from 'react'
import './Payment.scss'

interface Props {}

const Payment: React.FC<Props> = function () {
  return (
    <div className='payment'>
      <div className='payment-info'></div>
      <div className='payment-product'></div>
    </div>
  )
}

export default Payment
