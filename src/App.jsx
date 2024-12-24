/* eslint-disable react/jsx-no-target-blank */

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './ui/Home'
import Menu, {loader as menuLoader} from './features/menu/Menu'

import Cart from './features/cart/Cart'

import CreateOrder from './features/order/CreateOrder'
import Order, {loader as orderLoader} from './features/order/Order'
import AppLayout from "./ui/AppLayout"
import Error from './ui/Error'

/*
  - new way to create routers it called a Declarative way in react router 6.4
  - and this is necessary in react router 6.4 in order to enable data fetching 
  or data loading with react router 
  - the old way still works even in the modren react router but then we can't 
  use it to load data or to submit data using forms. 
*/ 

/*
  - we've created this AppLayout component which it will be the parent rout of every
  single other rout that we have in our application and so that's why we placed it 
  right here basically at the top and then we made all the routs as child routs so
  they're all nested routs. 
  
  - and since this one (AppLayout component) dosn't have a path it's technically
  called in react router a layout route.  
*/ 
const router= createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
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
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error/>
      },
    ]
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: <Menu />,
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
