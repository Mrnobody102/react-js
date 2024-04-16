import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/homepage/Home'
import Main from '../apps/Main'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])

export default routes
