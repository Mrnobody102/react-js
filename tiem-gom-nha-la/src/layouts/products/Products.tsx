import { Link } from 'react-router-dom'
import './Products.scss'
import Rating from '../../components/rating/Rating'
import Dropdown from '../../components/dropdown/Dropdown'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import CustomPagination from '../../components/pagination/Pagination'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Danh Mục', 'danh-muc', null, [
    getItem('Lọ Hoa', 'lo-hoa'),
    getItem('Bộ Ấm Trà', 'bo-am-tra'),
    getItem('Đồ Nhà Bếp', 'do-nha-bep'),
    getItem('Đồ Trang Trí', 'do-trang-tri'),
    getItem('Đồ Thờ', 'do-tho'),
    getItem('Đồ Thủy Tinh', 'do-thuy-tinh'),
    getItem('Design Trend', 'design-trend')
  ]),
  { type: 'divider' },
  getItem('Danh Mục', 'danh-muc', null, [
    getItem('Lọ Hoa', 'lo-hoa'),
    getItem('Bộ Ấm Trà', 'bo-am-tra'),
    getItem('Đồ Nhà Bếp', 'do-nha-bep'),
    getItem('Đồ Trang Trí', 'do-trang-tri'),
    getItem('Đồ Thờ', 'do-tho'),
    getItem('Đồ Thủy Tinh', 'do-thuy-tinh'),
    getItem('Design Trend', 'design-trend')
  ]),
  { type: 'divider' },
  getItem('Danh Mục', 'danh-muc', null, [
    getItem('Lọ Hoa', 'lo-hoa'),
    getItem('Bộ Ấm Trà', 'bo-am-tra'),
    getItem('Đồ Nhà Bếp', 'do-nha-bep'),
    getItem('Đồ Trang Trí', 'do-trang-tri'),
    getItem('Đồ Thờ', 'do-tho'),
    getItem('Đồ Thủy Tinh', 'do-thuy-tinh'),
    getItem('Design Trend', 'design-trend')
  ]),
  { type: 'divider' }
]

interface Props {
  name: string
  listProducts: {
    length: number
  }
}

const Products: React.FC<Props> = ({ name, listProducts }) => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  return (
    <>
      <div className='sidebar'>
        <div className='sibebar-container'>
          {/* <span className='sidebar__title'>Danh mục</span>
          <div className='sidebar__list'>
            <span className='sidebar__item'>{name}</span>
            <span className='sidebar__item'>{name}</span>
            <span className='sidebar__item'>{name}</span>
            <span className='sidebar__item'>{name}</span>
          </div> */}
          <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'
            items={items}
          />
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
        <CustomPagination />
      </div>
    </>
  )
}

export default Products
