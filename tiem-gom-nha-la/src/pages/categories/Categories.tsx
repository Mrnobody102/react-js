import './Categories.scss'
import CarouselComponent from '../../components/carousel/Carousel'
import Products from '../../layouts/products/Products'
interface Props {
  name: string
}

const items = [
  {
    img: 'https://nganhadecor.com/wp-content/uploads/2018/01/4386146279_56640729.jpg'
  },
  {
    img: 'https://vn-test-11.slatic.net/p/e89148ebea5c4bcb8b6850c6fa92d41c.png'
  },
  {
    img: 'https://gomtruongan.vn/uploads/products/11042020051427/lo-hoa-gom-bat-trang-dang-chum-thon_11042020051427.jpg'
  }
]

const Layout: React.FC<Props> = ({ name }) => {
  return (
    <div className='layout'>
      <CarouselComponent items={items} />
      <div className='category'>
        <Products name={name} listProducts={{ length: 10 }} />
      </div>
    </div>
  )
}

export default Layout
