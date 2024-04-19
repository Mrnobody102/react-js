import './Reviews.scss'
import ReviewsRating from '../../components/rating/ReviewsRating'

function Review() {
  return (
    <div className='reviews'>
      <ReviewsRating rating={[1, 2, 3, 4, 5]} average={2.5} />
      <div className='review__comment'>
        <div className='review__comment'>
          <p>Hình Ảnh từ Người Mua</p>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Review
