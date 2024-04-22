import './Main.scss'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'

function Main() {
  return (
    <div className='App'>
      <Header />
      <div className='app__content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
