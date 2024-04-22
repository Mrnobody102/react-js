import React from 'react'
import Checkbox from '../../components/input/Checkbox'
import Counter from '../../components/input/Counter'
import { BiTrash } from 'react-icons/bi'
import './Cart.scss'
import Button from '../../components/button/Button'

interface Props {}

const Cart: React.FC<Props> = function () {
  return (
    <div>
      <div className='mb-8'>
        <div className='text-3xl font-bold mb-3'>GIỎ HÀNG CỦA BẠN</div>
        <span className='text-lg'>Số sản phẩm: 9</span>
      </div>
      <div className='cart'>
        <div className='cart-item'>
          <div className='cart-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='cart-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 cart-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='cart-item__price'>2x250.000</span>
              <div className='cart-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='cart-item__option'>
              <Counter />
              <div className='cart-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
        <div className='cart-item'>
          <div className='cart-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='cart-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 cart-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='cart-item__price'>2x250.000</span>
              <div className='cart-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='cart-item__option'>
              <Counter />
              <div className='cart-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
        <div className='cart-item'>
          <div className='cart-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='cart-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 cart-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='cart-item__price'>2x250.000</span>
              <div className='cart-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='cart-item__option'>
              <Counter />
              <div className='cart-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
        <div className='cart-item'>
          <div className='cart-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='cart-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 cart-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='cart-item__price'>2x250.000</span>
              <div className='cart-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='cart-item__option'>
              <Counter />
              <div className='cart-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
        <div className='cart__footer'>
          <div className='cart__total mb-5'>
            Tổng cộng <span className='font-bold'>{'2.000.000'} đ</span>
          </div>
          <div className='cart__button'>
            <Button name='TIẾP TỤC MUA' bgColor='white' color='black' border='1px solid var(--border-color)' />
            <div className='mr-5'></div>
            <Button name='ĐẶT HÀNG TẤT CẢ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
