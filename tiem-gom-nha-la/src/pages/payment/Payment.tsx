import React from 'react'
import './Payment.scss'
import { Link } from 'react-router-dom'
import { Badge } from 'antd'

interface Props {}

const Payment: React.FC<Props> = function () {
  return (
    <div className='payment'>
      <div className='payment-info'>
        <div className='locator'>
          <Link className='link' to='/'>
            Trang chủ
          </Link>
          /
          <Link className='link' to='/cart'>
            &nbsp; Giỏ hàng
          </Link>
          /
          <Link className='link' to='/payment'>
            &nbsp; Thông tin giao hàng
          </Link>
        </div>
        <div className='p-4'>
          <div className='text-xl text-left'>Thông tin giao hàng</div>
          <input className='payment-input payment-input-name' type='text' placeholder='Họ và tên' />
          <div className='payment-input-group'>
            <input className='payment-input payment-input-phone' type='text' placeholder='Số điện thoại' />
            <input className='payment-input payment-input-mail' type='text' placeholder='Email' />
          </div>
          <input className='payment-input payment-input-address' type='text' placeholder='Địa chỉ' />
          <div></div>
        </div>
      </div>
      <div className='payment-products'>
        <div className='payment-product-item'>
          <Badge count={5}>
            <img
              src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
              alt=''
            />
          </Badge>
          <div className='payment-product-info'>
            <div className='payment-product-title'>
              <div className='payment-product-name'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH SANG TRỌNG</div>
              <div>250.000 X 2</div>
            </div>
            <div className='payment-product-price'>
              <div className='font-bold'>500.000đ</div>
            </div>
          </div>
        </div>
        <div className='payment-product-item'>
          <Badge count={5}>
            <img
              src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
              alt=''
            />
          </Badge>
          <div className='payment-product-info'>
            <div className='payment-product-title'>
              <div className='payment-product-name'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH SANG TRỌNG</div>
              <div>250.000 X 2</div>
            </div>
            <div className='payment-product-price'>
              <div className='font-bold'>500.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
