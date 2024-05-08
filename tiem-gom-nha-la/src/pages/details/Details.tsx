import './Details.scss'
import DetailsRating from '../../components/rating/DetailsRating'
import { ColorPicker } from 'antd'
import Counter from '../../components/input/Counter'
import Button from '../../components/button/Button'
import Reviews from '../../layouts/reviews/Reviews'
import { BiHeart } from 'react-icons/bi'
import SimilarProduct from '../../layouts/similar-product/SimilarProduct'

interface Props {
  id: string
}

const Details: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <div className='product-details'>
        <div className='product-details__img'>
          <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
        </div>
        <div className='product-details__content'>
          <div className='product-details__info under-line'>
            <div className='product-details__title'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
            <DetailsRating star={2.5} number={5} />
            <div className='product-details__price'>350.000</div>
          </div>
          <div className='product-details__option under-line'>
            <div className='product-details__option-item'>
              <div className='product-details__option-title'>Màu</div>
              <div className='product-details__option-main'>
                <ColorPicker
                  style={{ borderRadius: '50%' }}
                  defaultValue={'#fff'}
                  presets={[
                    {
                      label: 'Colors',
                      colors: ['#000', '#fff', '#163cff'],
                      defaultOpen: true
                    }
                  ]}
                />
              </div>
            </div>
            <div className='product-details__option-item'>
              <div className='product-details__option-title'>Số lượng </div>
              <div className='product-details__option-main'>
                <Counter />
              </div>
            </div>
            <div className='flex items-center mt-4'>
              <span className='mr-4'>HÓA ĐƠN CỦA BẠN:</span>
              <span className='font-bold text-xl'> 3.500.000</span>
            </div>
            <div className='flex my-4'>
              <Button name='Thêm vào giỏ hàng' color='black' bgColor='white' border='1px solid black'></Button>
              <div className='ml-6'></div>
              <Button name='Mua ngay'></Button>
            </div>
            <div className='flex items-center '>
              <BiHeart className='text-2xl' />
              <div className='mr-2'></div>
              <span>Đã thích </span>
              <span className='ml-1'>(16)</span>
            </div>
          </div>
          <div className='product-details__description'>
            <span className='font-semibold'>MÔ TẢ SẢN PHẨM</span>
            <div>
              <div className='flex mt-3'>
                <span className='w-40'>Chất liệu:</span>
                <span>{'Gốm sứ cao cấp'}</span>
              </div>
              <div className='flex mt-2'>
                <span className='w-40'>Kích thước:</span>
                <span>{'40x40x30'}</span>
              </div>
              <div className='mt-2'>
                <span>Mô tả về sản phẩm:</span>
                <br />
                <span className='mt-2'>Mô tả về sản phẩm là một sản phẩm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-details__reviews'>
        <div className=''>
          <Reviews />
        </div>
      </div>
      <SimilarProduct />
    </div>
  )
}

export default Details
