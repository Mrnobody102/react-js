import { Carousel } from 'antd'
import './Carousel.scss'

function CarouselComponent() {
  return (
    <Carousel autoplay>
      <div>
        <h3 className='carousel'>1</h3>
      </div>
      <div>
        <h3 className='carousel'>2</h3>
      </div>
      <div>
        <h3 className='carousel'>3</h3>
      </div>
    </Carousel>
  )
}

export default CarouselComponent
