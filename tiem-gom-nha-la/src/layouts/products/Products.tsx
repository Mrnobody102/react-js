import { Link } from 'react-router-dom'
import './Products.scss'
import Rating from '../../components/rating/Rating'
import Dropdown from '../../components/dropdown/Dropdown'

interface Props {
  name: string
  listProducts: {
    length: number
  }
}

const Sidebar: React.FC<Props> = ({ name, listProducts }) => {
  return (
    <>
      <div className='sidebar'>
        <div className='sibebar-container'>
          <span className='sidebar__title'>Danh mục</span>
          <div className='sidebar__list'>
            <span className='sidebar__item'>{name}</span>
            <span className='sidebar__item'>{name}</span>
            <span className='sidebar__item'>{name}</span>
            <span className='sidebar__item'>{name}</span>
          </div>
        </div>
      </div>
      <div className='products'>
        <div className='flex justify-between mb-4'>
          <div>
            {' '}
            <Dropdown name='Mới nhất' />
          </div>
          <div> {listProducts.length} sản phẩm </div>
        </div>
        <div className='grid grid-cols-3'>
          <Link to={'1'} className='link product-item'>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
            <Rating star={2.5} number={5} />
            <div className='flex justify-between items-baseline mt-3'>
              <div className='text-xl font-semibold'>350.000</div>
              <div className='text-sm font-normal'>Đã bán 1k</div>
            </div>
          </Link>
          <Link to={''} className='link product-item'>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
            <Rating star={2.5} number={5} />
            <div className='flex justify-between items-baseline mt-3'>
              <div className='text-xl font-semibold'>350.000</div>
              <div className='text-sm font-normal'>Đã bán 1k</div>
            </div>
          </Link>
          <Link to={''} className='link product-item'>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
            <Rating star={2.5} number={5} />
            <div className='flex justify-between items-baseline mt-3'>
              <div className='text-xl font-semibold'>350.000</div>
              <div className='text-sm font-normal'>Đã bán 1k</div>
            </div>
          </Link>
          <Link to={''} className='link product-item'>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
            <Rating star={2.5} number={5} />
            <div className='flex justify-between items-baseline mt-3'>
              <div className='text-xl font-semibold'>350.000</div>
              <div className='text-sm font-normal'>Đã bán 1k</div>
            </div>
          </Link>
          <Link to={''} className='link product-item'>
            <div className='product-item__image'>
              <img src='https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg' alt='' />
            </div>
            <div className='my-3'>BÌNH HOA TRANG TRÍ PHÒNG KHÁCH TRANG TRỌNG</div>
            <Rating star={2.5} number={5} />
            <div className='flex justify-between items-baseline mt-3'>
              <div className='text-xl font-semibold'>350.000</div>
              <div className='text-sm font-normal'>Đã bán 1k</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
