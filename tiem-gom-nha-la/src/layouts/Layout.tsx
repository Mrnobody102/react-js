import { Link } from 'react-router-dom'
import './Layout.scss'

interface Props {
  locator: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ locator, children }) => {
  return (
    <div className='layout'>
      <div className='locator'>
        <Link className='link' to='/'>
          Trang chủ
        </Link>
        /{' '}
        <Link className='link' to={'/home'}>
          {locator}
        </Link>
      </div>
      <div className='content'>{children}</div>
    </div>
  )
}

export default Layout
