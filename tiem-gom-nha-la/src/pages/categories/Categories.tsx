import './Categories.scss'
import CarouselComponent from '../../components/carousel/Carousel'
import Products from '../../layouts/products/Products'
interface Props {
  name: string
}

const Layout: React.FC<Props> = ({ name }) => {
  return (
    <div className='layout'>
      <CarouselComponent />
      <div className='category'>
        <Products name={name} listProducts={{ length: 10 }} />
      </div>
    </div>
  )
}

export default Layout
