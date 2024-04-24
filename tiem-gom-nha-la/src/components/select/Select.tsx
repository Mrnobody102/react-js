import './Select.scss'

interface Props {
  label?: string
  list?: string[]
}

const CustomCheckbox: React.FC<Props> = ({ label, list }) => {
  return (
    <>
      <select className='select'>
        <option value=''>{label}</option>
        <option value=''>{'Hải Dương'}</option>
        <option value=''>{'Hà Nội'}</option>
        {list?.map((item) => <option value=''>{item}</option>)}
      </select>
    </>
  )
}

export default CustomCheckbox
