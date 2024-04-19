import './Button.scss'
interface Props {
  name: string
  color?: string
  bgColor?: string
  border?: string
  borderRadius?: string
}

const Button: React.FC<Props> = ({ name, color, bgColor, border, borderRadius }) => {
  return (
    <button
      className='button button--primary'
      style={{ color: color, backgroundColor: bgColor, border: border, borderRadius: borderRadius }}
    >
      {name}
    </button>
  )
}

export default Button
