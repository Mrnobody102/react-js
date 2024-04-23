import { IconType } from 'react-icons'
import './Input.scss'

interface Props {
  width?: string
  height?: string
  placeholder?: string
  icon?: IconType
}

const Text: React.FC<Props> = ({ width, height, placeholder, icon: Icon }) => {
  return (
    <div className='input input--text'>
      {Icon && <Icon className='icon' />}
      <input style={{ width: width, height: height }} type='text' placeholder={placeholder} />
    </div>
  )
}

export default Text
