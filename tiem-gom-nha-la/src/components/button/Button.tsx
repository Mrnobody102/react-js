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
  return (
    <button
      onClick={() => (to ? (window.location.href = to) : null)}
      className='button button--primary'
      style={{ color: color, backgroundColor: bgColor, border: border, borderRadius: borderRadius }}
    >
      {name}
    </button>
  )
}

export default Button
