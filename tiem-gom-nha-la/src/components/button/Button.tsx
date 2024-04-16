import './Button.scss'
interface Props {
  name: string
}

const Button: React.FC<Props> = ({ name }) => {
  return <button className='button button--primary'>{name}</button>
}

export default Button
