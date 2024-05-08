import { Carousel } from 'antd'
import './Carousel.scss'

interface Carousel {
  img: string
}

interface Props {
  items: Array<Carousel>
}

const CarouselComponent: React.FC<Props> = ({ items }) => (
  <Carousel autoplay>
    {items.map((item) => (
      <div className='carousel-img-container'>
        <img className='carousel-img' src={item.img} />
      </div>
    ))}
  </Carousel>
)

export default CarouselComponent
