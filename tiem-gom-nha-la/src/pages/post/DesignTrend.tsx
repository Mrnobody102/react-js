import { Link } from 'react-router-dom'
import './DesignTrend.scss'

function DesignTrend() {
  return (
    <div className='design-trend'>
      <div className='text-3xl font-bold mb-3'> DESIGN TREND</div>
      <div className='grid grid-cols-3'>
        <Link to={''} className='link design-trend-item'>
          <img src='https://housef.vn/wp-content/uploads/2022/12/10-mau-thiet-ke-vach-sofa-toi-gian-9.jpg' alt='' />
          <div className='design-trend-item__title'>4 phong cách thiết kế đẹp 2022</div>
          <div className='design-trend-item__description'>
            Thế giới thiết kế nội thât phát triển từng phút và thông tin ngày càng bị mai một dần. Thế giới thiết kế nội
            thât phát triển từng phút và thông tin ngày càng bị mai một dần. Thế giới thiết kế nội thât phát triển từng
            phút và thông tin ngày càng bị mai một dần.
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DesignTrend
