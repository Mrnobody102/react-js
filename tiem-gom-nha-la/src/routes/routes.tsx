import { createBrowserRouter } from 'react-router-dom'
import Home from '~/pages/homepage/Home'
import Auth from '~/pages/auth/Auth'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])

export default routes
