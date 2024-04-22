import './Input.scss'

interface Props {
  label?: string
}

const ColorPicker: React.FC<Props> = ({ label }) => {
  return (
    <>
      <label className='label--checkbox' htmlFor=''>
        {label}
      </label>
    </>
  )
}

export default ColorPicker
