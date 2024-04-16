import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/homepage/Home'
import Main from '../apps/Main'
import Auth from '../pages/auth/Auth'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />
  }
])

export default routes
