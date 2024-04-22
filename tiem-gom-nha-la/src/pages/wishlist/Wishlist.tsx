import React from 'react'
import Checkbox from '../../components/input/Checkbox'
import Counter from '../../components/input/Counter'
import { BiTrash } from 'react-icons/bi'
import './Wishlist.scss'

interface Props {}

const Wishlist: React.FC<Props> = function () {
  return (
    <div>
      <div className='mb-8'>
        <div className='text-3xl font-bold mb-3'>WISHLIST</div>
        <span className='text-lg'>Số sản phẩm: 9</span>
      </div>
      <div className='wishlist'>
        <div className='wishlist-item'>
          <div className='wishlist-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='wishlist-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 wishlist-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='wishlist-item__price'>2x250.000</span>
              <div className='wishlist-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='wishlist-item__option'>
              <Counter />
              <div className='wishlist-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
        <div className='wishlist-item'>
          <div className='wishlist-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='wishlist-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 wishlist-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='wishlist-item__price'>2x250.000</span>
              <div className='wishlist-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='wishlist-item__option'>
              <Counter />
              <div className='wishlist-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
        <div className='wishlist-item'>
          <div className='wishlist-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='wishlist-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 wishlist-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='wishlist-item__price'>2x250.000</span>
              <div className='wishlist-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='wishlist-item__option'>
              <Counter />
              <div className='wishlist-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
        <div className='wishlist-item'>
          <div className='wishlist-item__info'>
            <Checkbox />
            <div className='ml-6'>
              <img
                className='wishlist-item__image'
                src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
                alt=''
              />
            </div>
            <div className='ml-12'>
              <div className='my-3 wishlist-item__product'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
              <span className='wishlist-item__price'>2x250.000</span>
              <div className='wishlist-item__total'>500.000</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='wishlist-item__option'>
              <Counter />
              <div className='wishlist-item__remove'>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
