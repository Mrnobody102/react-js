import MasterTitle from '../../components/title/MasterTitle'
import './Header.scss'
import Text from '../../components/input/Text'
import { FaSearch } from 'react-icons/fa'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className='app__title'>
      <MasterTitle />
      <div>
        <Text icon={FaSearch} placeholder='Search' />
      </div>
    </header>
  )
}

export default Header
