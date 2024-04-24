import './Reviews.scss'
import ReviewsRating from '../../components/rating/ReviewsRating'
import { Rate } from 'antd'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
interface Props {
  comments?: string
}
const Review: React.FC<Props> = ({ comments }) => {
  return (
    <div className='reviews'>
      <ReviewsRating rating={[1, 2, 3, 4, 5]} average={2.5} />
      <div className='review__comment-container'>
        <div className='review__imgs'>
          <p>Hình Ảnh từ Người Mua</p>
          <div className='grid grid-cols-6'>
            <img
              className='review__img'
              src='https://gomsubattrang.vn/uploads/data/20/imgnews/lo-hoa-mau-do-gia-re.jpg'
              alt=''
            />
            <img
              className='review__img'
              src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
              alt=''
            />
            <img
              className='review__img'
              src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
              alt=''
            />
            <img
              className='review__img'
              src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
              alt=''
            />
            <img
              className='review__img'
              src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
              alt=''
            />
          </div>
        </div>
        <div className='review__comments'>
          <div className='review__comment-item'>
            <div className='reviewer'>
              <img
                className='review__avatar'
                src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
                alt=''
              />
              <div className='reviewer__info'>
                <span>giang tr_ng</span>
                <Rate character='★' style={{ color: 'rgb(255, 183, 1)' }} disabled allowHalf defaultValue={1} />
              </div>
            </div>
            <div className='review__comment-content'>
              <span>Cái bình rất dễ thương, nên mua nhé mọi người</span>
              <div className='review__comment-imgs grid grid-cols-5'>
                <img
                  className='review__comment-img'
                  src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
                  alt=''
                />
                <img
                  className='review__comment-img'
                  src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
                  alt=''
                />
                <img
                  className='review__comment-img'
                  src='https://gomsuthanhluong.com/wp-content/uploads/2021/06/13125-lo-ke-soc-men-hoa-bien-bat-trang_result.png'
                  alt=''
                />
              </div>
              <div className='flex justify-between'>
                <span>Feb 19, 2022</span>
                <span className='flex items-center text-2xl'>
                  <div className='cursor-pointer'>
                    <AiOutlineLike />
                  </div>
                  <div className='text-sm'>(12)</div>
                  <div className='flex items-center text-2xl ml-4'>
                    <div className='cursor-pointer'>
                      <AiOutlineDislike />
                    </div>
                    <div className='text-sm'>(2)</div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
