import { Checkbox } from 'antd'
import './Input.scss'

interface Props {
  label: string
}

const CustomCheckbox: React.FC<Props> = ({ label }) => {
  return (
    <>
      <Checkbox />{' '}
      <label className='label--checkbox' htmlFor=''>
        {label}
      </label>
    </>
  )
}

export default CustomCheckbox
