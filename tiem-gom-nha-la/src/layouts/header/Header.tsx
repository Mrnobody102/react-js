import { Link } from 'react-router-dom'
import MasterTitle from '../../components/title/MasterTitle'
import './Header.scss'
import { FaHeart, FaSearch, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import Navbar from '../navbar/Navbar'

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
          <Link to={''} className='link header-items'>
            <FaHeart />
            <span>WISHLIST</span>
          </Link>
          <Link to={''} className='link header-items'>
            <FaCartShopping />
            <span>GIỎ HÀNG</span>
          </Link>
          <Link to={''} className='link header-items'>
            <FaUser />
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
