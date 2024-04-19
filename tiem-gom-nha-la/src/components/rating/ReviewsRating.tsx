import { Rate } from 'antd'
import Button from '../button/Button'
import './Rating.scss'

interface Props {
  rating: Array<number>
  average: number
}

const Rating: React.FC<Props> = ({ rating, average }) => {
  return (
    <div className='flex items-center my-6 bg-stone-300'>
      <div className='rating-side text-left border-right'>
        <div className='font-semibold'>ĐÁNH GIÁ SẢN PHẨM</div>
        <div className='mt-3'>
          <Rate
            character='★'
            style={{ color: 'rgb(255, 183, 1)', fontSize: '1.8rem' }}
            disabled
            allowHalf
            defaultValue={average}
          />
          <span className='ms-3 text-sm'>({average}/5)</span>
          <span className='ms-3 text-sm'>({rating.length} đánh giá)</span>
        </div>
        <div className='mt-8'>
          <Button name='ĐÁNH GIÁ NGAY' borderRadius='3px' />
        </div>
      </div>
      <div className='rating-side flex justify-center'>
        <div className='flex flex-col text-left'>
          <div className='flex items-baseline'>
            <div className='star flex-1'>★★★★★</div>
            <span> (20)</span>
          </div>
          <div className='flex items-baseline'>
            <div className='star flex-1'>★★★★</div>
            <span className='ml-2'> (20)</span>
          </div>
          <div className='flex items-baseline'>
            <div className='star flex-1'>★★★</div>
            <span className='ml-2'> (20)</span>
          </div>
          <div className='flex items-baseline'>
            <div className='star flex-1'>★★</div>
            <span className='ml-2'> (20)</span>
          </div>
          <div className='flex items-baseline'>
            <div className='star flex-1'>★</div>
            <span className='ml-2'> (20)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rating
