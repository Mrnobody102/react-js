import { Link } from 'react-router-dom'
import Rating from '../../components/rating/Rating'
import './SimilarProduct.scss'

function SimilarProduct() {
  return (
    <div className='similar-product'>
      <div className='similar-product-title'>SẢN PHẨM TƯƠNG TỰ</div>
      <div className='grid grid-cols-4'>
        <div className='product-item'>
          <Link className='link' to={''}>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
          </Link>
          <Rating star={2.5} number={5} />
          <div className='flex justify-between items-baseline mt-3'>
            <div className='text-xl font-semibold'>350.000</div>
            <div className='text-sm font-normal'>Đã bán 1k</div>
          </div>
        </div>
        <div className='product-item'>
          <Link className='link' to={''}>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
          </Link>
          <Rating star={2.5} number={5} />
          <div className='flex justify-between items-baseline mt-3'>
            <div className='text-xl font-semibold'>350.000</div>
            <div className='text-sm font-normal'>Đã bán 1k</div>
          </div>
        </div>
        <div className='product-item'>
          <Link className='link' to={''}>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
          </Link>
          <Rating star={2.5} number={5} />
          <div className='flex justify-between items-baseline mt-3'>
            <div className='text-xl font-semibold'>350.000</div>
            <div className='text-sm font-normal'>Đã bán 1k</div>
          </div>
        </div>
        <div className='product-item'>
          <Link className='link' to={''}>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
          </Link>
          <Rating star={2.5} number={5} />
          <div className='flex justify-between items-baseline mt-3'>
            <div className='text-xl font-semibold'>350.000</div>
            <div className='text-sm font-normal'>Đã bán 1k</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimilarProduct
