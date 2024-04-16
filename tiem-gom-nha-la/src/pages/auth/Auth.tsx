import './Auth.scss'
import { FaFacebook, FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa'
import Text from '../../components/input/Text'
import Password from '../../components/input/Password'
import Button from '../../components/button/Button'
import Checkbox from '../../components/input/Checkbox'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

function LoginAndSignUp() {
  return (
    <div className='auth'>
      <div className='auth-container'>
        <div className='auth-side login'>
          <div className='heading-2'>ĐĂNG NHẬP</div>
          <div className='input-group'>
            <Text icon={FaUser} placeholder='Email/ Số điện thoại/ Tên đăng nhập' />
            <Password icon={FaLock} placeholder='Mật khẩu' />
            <Checkbox label='Nhớ mật khẩu' />
          </div>
          <div>
            <Button name='ĐĂNG NHẬP' />
            <Link className='typo-1 heading-4 ms-8' to={''}>
              Quên mật khẩu?
            </Link>
          </div>
        </div>
        <div className='auth-side signup'>
          <div className='heading-2'>TẠO TÀI KHOẢN</div>
          <div className='input-group'>
            <Text icon={FaUser} placeholder='Tên' />
            <Text icon={FaPhoneAlt} placeholder='Số điện thoại ' />
            <Password icon={FaLock} placeholder='Mật khẩu ' />
            <Text icon={FaLock} placeholder='Nhập lại mật khẩu ' />
          </div>
          <div>
            <Button name='ĐĂNG KÍ' />
          </div>
        </div>
      </div>
      <div className='oauth'>
        <div className='oauth-container'>
          <div className='oauth__item'>
            <FaFacebook />
            <Link className='oauth__link' to={''}>
              ĐĂNG NHẬP VỚI FACEBOOK
            </Link>
          </div>
          <div className='oauth__item'>
            <FcGoogle />
            <Link className='oauth__link' to={''}>
              ĐĂNG NHẬP VỚI GOOGLE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAndSignUp
