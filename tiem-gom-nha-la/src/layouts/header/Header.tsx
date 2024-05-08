import { Link } from 'react-router-dom'
import MasterTitle from '../../components/title/MasterTitle'
import './Header.scss'
import { FaSearch } from 'react-icons/fa'
import Navbar from '../navbar/Navbar'
import { BiCart, BiHeart, BiUser } from 'react-icons/bi'
import { Badge } from 'antd'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <div className='app__title'>
        <MasterTitle />
        <div className='flex items-center justify-between'>
          <div className='searchbox input'>
            <FaSearch className='icon' />
            <input style={{ width: '100%', height: '26px' }} type='text' placeholder='Search' />
          </div>
          <Link to={'wishlist'} className='link header-items'>
            <BiHeart />
            <span>WISHLIST</span>
          </Link>
          <Link to={'cart'} className='link header-items header-cart'>
            <Badge
              count={4}
              size='small'
              color='var(--primary-color)'
              style={{ fontFamily: 'Alexandria', fontSize: '0.6rem' }}
            >
              <BiCart className='header-cart-item' />
            </Badge>
            <span>GIỎ HÀNG</span>
          </Link>
          <Link to={'account'} className='link header-items'>
            <BiUser />
            <span>TÀI KHOẢN</span>
          </Link>
        </div>
      </div>
      <Navbar />
      <div className='line-container'>
        <div className='line'></div>
      </div>
    </header>
  )
}

export default Header
