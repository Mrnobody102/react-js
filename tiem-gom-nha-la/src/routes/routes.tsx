import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/homepage/Home'
import Main from '../apps/Main'
import Auth from '../pages/auth/Auth'
import Layout from '../layouts/Layout'
import Categories from '../pages/categories/Categories'
import Details from '../pages/details/Details'
import Wishlist from '../pages/wishlist/Wishlist'
import Cart from '../pages/cart/Cart'
import Payment from '../pages/payment/Payment'
import DesignTrend from '../pages/post/DesignTrend'

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
        path: 'wishlist',
        element: <Wishlist />
      },
      {
        path: 'cart',
        element: <Cart id='1' />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'design-trend',
        element: <Layout locator='Design Trend' children={<DesignTrend />} />
      },
      {
        path: 'lo-hoa',
        element: <Layout locator='Lọ hoa' to='lo-hoa' children={<Categories name='Lọ hoa' />} />
      },
      {
        path: 'lo-hoa/:id',
        element: <Layout locator='Lọ hoa' children={<Details id={'1'} />} />
      },
      {
        path: 'bo-am-tra',
        element: <Layout locator='Bộ ấm trà' to='lo-hoa' children={<Categories name='Bộ ấm trà' />} />
      },
      {
        path: 'bo-am-tra/:id',
        element: <Layout locator='Bộ ấm trà' children={<Details id={'1'} />} />
      },
      {
        path: 'do-trang-tri',
        element: <Layout locator='Đồ trang trí' to='do-trang-tri' children={<Categories name='Đồ trang trí' />} />
      },
      {
        path: 'do-trang-tri/:id',
        element: <Layout locator='Đồ trang trí' children={<Details id={'1'} />} />
      },
      {
        path: 'do-nha-bep',
        element: <Layout locator='Đồ nhà bếp' to='do-nha-bep' children={<Categories name='Đồ nhà bếp' />} />
      },
      {
        path: 'do-nha-bep/:id',
        element: <Layout locator='Đồ nhà bếp' children={<Details id={'1'} />} />
      },
      {
        path: 'do-tho',
        element: <Layout locator='Đồ thờ' to='do-tho' children={<Categories name='Đồ thờ' />} />
      },
      {
        path: 'do-tho/:id',
        element: <Layout locator='Đồ thờ' children={<Details id={'1'} />} />
      },
      {
        path: 'do-thuy-tinh',
        element: <Layout locator='Đồ thủy tinh' to='do-thuy-tinh' children={<Categories name='Đồ thủy tinh' />} />
      },
      {
        path: 'do-thuy-tinh/:id',
        element: <Layout locator='Đồ thủy tinh' children={<Details id={'1'} />} />
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />
  }
])

export default routes
