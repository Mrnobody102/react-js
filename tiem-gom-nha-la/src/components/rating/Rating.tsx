import { Rate } from 'antd'

interface Props {
  star: number
  number: number
}

const Rating: React.FC<Props> = ({ star, number }) => {
  return (
    <div>
      <Rate character='★' style={{ color: 'rgb(255, 183, 1)' }} disabled allowHalf defaultValue={star} />
      <span className='ms-3 text-sm'>({number} đánh giá)</span>
    </div>
  )
}

export default Rating
