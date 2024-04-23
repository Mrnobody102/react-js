import { useNavigate } from 'react-router-dom'
import './Button.scss'
interface Props {
  to?: string
  name: string
  color?: string
  bgColor?: string
  border?: string
  borderRadius?: string
}

const Button: React.FC<Props> = ({ to, name, color, bgColor, border, borderRadius }) => {
  const nav = useNavigate()
  return (
    <button
      onClick={() => nav(to ? to : '')}
      className='button button--primary'
      style={{ color: color, backgroundColor: bgColor, border: border, borderRadius: borderRadius }}
    >
      {name}
    </button>
  )
}

export default Button
