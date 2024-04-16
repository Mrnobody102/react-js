import './Main.scss'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/header/Header'

function Main() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Main
