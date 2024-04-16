import './Main.scss'
import Auth from '../pages/auth/Auth'
import MasterTitle from '../components/title/MasterTitle'

function Main() {
  return (
    <div className='App'>
      <header className='app__title'>
        <MasterTitle />
      </header>
      <Auth />
    </div>
  )
}

export default Main
