import React, { useState } from 'react'
import './Payment.scss'
import { Link } from 'react-router-dom'
import { Badge } from 'antd'
import Button from '../../components/button/Button'
import Checkbox from '../../components/input/Checkbox'
import { FaChevronLeft } from 'react-icons/fa'
import Select from '../../components/select/Select'

interface Props {}

const Payment: React.FC<Props> = function () {
  const [bank, setBank] = useState('')

  const handleSelectBank = (event: { target: { value: React.SetStateAction<string> } }) => {
    setBank(event.target.value)
  }

  return (
    <>
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
            <div className='text-xl text-left mb-3'>Thông tin giao hàng</div>
            <input className='payment-input payment-input-name' type='text' placeholder='Họ và tên' />
            <div className='payment-input-group'>
              <input className='payment-input payment-input-phone' type='text' placeholder='Số điện thoại' />
              <input className='payment-input payment-input-mail' type='text' placeholder='Email' />
            </div>
            <input className='payment-input payment-input-address' type='text' placeholder='Địa chỉ' />
            <div className='flex mt-2'>
              <Select label='Tỉnh/thành phố' />
              <div className='ml-3'></div>
              <Select label='Quận/huyện' />
            </div>
          </div>
          <div className='p-4'>
            <div className='text-xl text-left'>Phương thức thanh toán</div>
            <div>List of methods</div>
            <div className='flex flex-col text-left my-4'>
              <label className='mb-3 flex items-center'>
                <input
                  type='radio'
                  className='mr-3'
                  value='vietcombank'
                  checked={bank === 'vietcombank'}
                  onChange={handleSelectBank}
                />
                <img
                  className='w-12 border mr-3'
                  src='https://ibrand.vn/wp-content/uploads/2022/10/NDTH-Vietcombank-3-min.png'
                  alt=''
                />
                Vietcombank - Ngân Hàng Ngoại Thương
              </label>
              <label className='mb-3 flex items-center'>
                <input
                  type='radio'
                  className='mr-3'
                  value='viettinbank'
                  checked={bank === 'viettinbank'}
                  onChange={handleSelectBank}
                />
                <img
                  className='w-12 h-12 border mr-3 bg-white'
                  src='https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-VietinBank-CTG-Ori.png'
                  alt=''
                />
                Viettinbank - Ngân Hàng Công Thương
              </label>
              <label className='mb-3 flex items-center'>
                <input
                  type='radio'
                  className='mr-3'
                  value='bidv'
                  checked={bank === 'bidv'}
                  onChange={handleSelectBank}
                />
                <img
                  className='w-12 border mr-3'
                  src='https://inkythuatso.com/uploads/thumbnails/800/2021/10/logo-bidv-inkythuatso-22-08-48-55.jpg'
                  alt=''
                />
                BIDV - Ngân Hàng Đầu Tư và Phát Triển Việt Nam
              </label>
              <label className='mb-3 flex items-center'>
                <input
                  type='radio'
                  className='mr-3'
                  value='techcombank'
                  checked={bank === 'techcombank'}
                  onChange={handleSelectBank}
                />
                <img
                  className='w-12 border mr-3'
                  src='https://inkythuatso.com/uploads/images/2021/09/logo-techcombank-inkythuatso-10-15-11-46.jpg'
                  alt=''
                />
                Techcombank - Ngân Hàng Kỹ Thương Việt Nam
              </label>
            </div>
          </div>
          <div className='p-4 text-left'>
            <div className='text-xl mb-5'>Điều khoản và điều kiện thanh toán</div>
            <div className='payment-terms'>
              <div>
                <p className='font-semibold'>1. CHÍNH SÁCH VẬN CHUYỂN</p>
                <span className='font-semibold'>Phương thức vận chuyển:</span> Chúng tôi sẽ giao hàng hóa/ sản phẩm cho
                quý khách qua các công ty vận chuyển theo địa chỉ người nhận hàng mà Quý khách đã đăng ký khi đặt hàng.
                <br />
                <br />
                <span className='font-semibold'>Thời gian giao hàng: </span>
                <br />
                <br />
                Thời gian giao hàng toàn quốc từ 3 đến 5 ngày làm việc kể từ khi đơn hàng được thanh toán thành công.
              </div>
            </div>
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
          <div className='payment-product-promotional-code'>
            <input className='payment-input payment-input-promotional-code' type='text' placeholder='Mã ưu đãi' />
            <div className='payment-button'>
              <Button to='' name='ÁP DỤNG' />
            </div>
          </div>
          <div className='payment-product-total'>
            <div className='payment-product-temple'>
              <div className='payment-product-temple-total'>
                <span>Tạm tính:</span>
                <span>1.250.000</span>
              </div>
              <div className='payment-product-temple-total'>
                <span>Phí vận chuyển: </span>
                <span></span>
              </div>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold'>Tổng cộng:</span>
              <div className='payment-product-total-price'>
                <span className='font-light text-sm'>VND</span>
                <span className='payment-product-total-price-number'>1.250.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-left p-4'>
        <Checkbox /> <span className='text-sm'>Tôi đã đọc và chấp nhận các điều kiện và điều khoản thanh toán</span>
      </div>
      <div className='payment-total-wrapper mt-5'>
        <div className='payment-total-leftside'></div>
        <div className='payment-total'>
          <div className='payment-product-temple-total mb-2'>
            <span>Tạm tính:</span>
            <span>1.250.000</span>
          </div>
          <div className='payment-product-temple-total mb-2'>
            <span>Phí vận chuyển: </span>
            <span>-</span>
          </div>
          <div className='payment-product-temple-total pb-4 under-line'>
            <span>Voucher giảm giá: </span>
            <span>-</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Tổng thanh toán:</span>
            <div className='payment-product-total-price'>
              <span className='font-light text-sm'>VND</span>
              <span className='payment-product-total-price-number'>1.250.000</span>
            </div>
          </div>
          <div className='payment-confirm mt-10'>
            <Link className='link flex items-center text-lg' to='/cart'>
              <FaChevronLeft />
              <span className='ml-2'>Giỏ hàng</span>
            </Link>
            <Button to='' name='THANH TOÁN' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
