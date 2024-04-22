import { TbTruckDelivery } from 'react-icons/tb'
import './Footer.scss'
import { FiCreditCard, FiPhone } from 'react-icons/fi'
import { AiOutlineLike } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-item__container'>
        <div className='footer-intro'>
          <div className='footer-intro-item'>
            <div className='footer-intro-item__content'>
              <div className='footer-intro-item__content__icon'>
                <TbTruckDelivery />
              </div>
              GIAO HÀNG ĐẢM BẢO VÀ NHANH CHÓNG
            </div>
          </div>
          <div className='footer-intro-item'>
            <div className='footer-intro-item__content'>
              <div className='footer-intro-item__content__icon'>
                <FiCreditCard />
              </div>
              THANH TOÁN ĐƠN GIẢN, NHANH CHÓNG VÀ BẢO MẬT
            </div>
          </div>
          <div className='footer-intro-item'>
            <div className='footer-intro-item__content'>
              <div className='footer-intro-item__content__icon'>
                <FiPhone />
              </div>
              HOTLINE: 0989111396
            </div>
          </div>
          <div className='footer-intro-item'>
            <div className='footer-intro-item__content'>
              <div className='footer-intro-item__content__icon'>
                <AiOutlineLike />
              </div>
              CAM KẾT SẢN PHẨM CHẤT LƯỢNG
            </div>
          </div>
        </div>
      </div>
      <div className='footer-item__container'>
        <div className='footer-guide'>
          <div className='footer-guide__content'>
            <Link className='link' to={''}>
              HƯỚNG DẪN MUA HÀNG
            </Link>
            <Link className='link' to={''}>
              CHÍNH SÁCH ĐỔI TRẢ
            </Link>
          </div>
          <div className='footer-guide__content'>
            <Link className='link' to={''}>
              PHƯƠNG THỨC THANH TOÁN
            </Link>
            <div className='footer-guide__payment'>
              <img src='https://i.pinimg.com/originals/8a/3e/4b/8a3e4b3e1309ef43bc7ad90284ad9136.png' alt='' />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png'
                alt=''
              />
              <img
                src='https://developers.momo.vn/v3/vi/assets/images/icon-52bd5808cecdb1970e1aeec3c31a3ee1.png'
                alt=''
              />
            </div>
          </div>
          <div className='footer-guide__content'>
            <Link className='link' to={''}>
              NHẬN THÔNG TIN TỪ CHÚNG TÔI
            </Link>
            <div>
              <input className='footer-guide__input-email' placeholder='Vui lòng nhập email của bạn' />
            </div>
          </div>
        </div>
      </div>
      <div className='footer-info'>
        <div className='footer-info__logo-container'>
          <img className='footer-info__logo' src='https://vectorflags.s3.amazonaws.com/flags/vn-square-01.png' alt='' />
          <span>VIỆT NAM</span>
        </div>
        <div className='footer-info__list'>
          <Link className='link' to={''}>
            GIỚI THIỆU
          </Link>
          <Link className='link' to={''}>
            CHÍNH SÁCH VẬN CHUYỂN
          </Link>
          <Link className='link' to={''}>
            QUY CHẾ HOẠT ĐỘNG
          </Link>
          <Link className='link' to={''}>
            CHÍNH SÁCH BẢO MẬT
          </Link>
          <Link className='link' to={''}>
            FEEDBACK
          </Link>
        </div>
        <div className='footer-info__connect'>
          <span>KẾT NỐI VỚI CHÚNG TÔI</span>
          <div className='footer-info__social'>
            <Link className='link' to={''}>
              <FaInstagram />
            </Link>
            <div className='ml-10'></div>
            <Link className='link' to={''}>
              <FaFacebook />
            </Link>
            <div className='ml-10'></div>
            <Link className='link' to={''}>
              {' '}
              <FiPhone />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
