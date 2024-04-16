import { IconType } from 'react-icons'
import './Input.scss'

interface Props {
  placeholder: string
  icon: IconType
}

const Text: React.FC<Props> = ({ placeholder, icon: Icon }) => {
  return (
    <div className='input input--text'>
      {Icon && <Icon className='icon' />}
      <input type='password' placeholder={placeholder} />
    </div>
  )
}

export default Text
