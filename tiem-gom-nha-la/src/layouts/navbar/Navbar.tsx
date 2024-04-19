import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to={'lo-hoa'} className='link navbar__item'>
        LỌ HOA
      </Link>
      <Link to={'bo-am-tra'} className='link navbar__item'>
        BỘ ẤM TRÀ
      </Link>
      <Link to={'do-trang-tri'} className='link navbar__item'>
        ĐỒ TRANG TRÍ
      </Link>
      <Link to={'do-nha-bep'} className='link navbar__item'>
        ĐỒ NHÀ BẾP
      </Link>
      <Link to={'do-tho'} className='link navbar__item'>
        ĐỒ THỜ
      </Link>
      <Link to={'do-thuy-tinh'} className='link navbar__item'>
        ĐỒ THỦY TINH
      </Link>
      <Link to={'design-trend'} className='link navbar__item'>
        DESIGN TREND
      </Link>
    </div>
  )
}

export default Navbar
