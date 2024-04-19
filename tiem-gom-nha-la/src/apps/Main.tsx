import './Main.scss'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/header/Header'

function Main() {
  return (
    <div className='App'>
      <Header />
      <div className='app__content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
