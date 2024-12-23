/* eslint-disable react/jsx-no-target-blank */

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './ui/Home'
import Menu from './features/menu/Menu'

import Cart from './features/cart/Cart'

import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'

/*
  - new way to create routers it called a Declarative way in react router 6.4
  - and this is necessary in react router 6.4 in order to enable data fetching 
  or data loading with react router 
  - the old way still works even in the modren react router but then we can't 
  use it to load data or to submit data using forms. 
*/ 
const router= createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/order/new',
    element: <CreateOrder />
  },
  {
    path: '/order/:orderId',
    element: <Order />
  },
])

function App() {
  
  return (<RouterProvider router={router} />)
}

export default App
