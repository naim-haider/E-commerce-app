import React from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

//import Pages
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductdetailPage from './pages/ProductdetailPage';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/signup',
    element: <SignupPage/>
  },
  {
    path: '/cart',
    element: <CartPage/>
  },
  {
    path: '/checkout',
    element: <CheckoutPage/>
  },
  {
    path: '/productdetail',
    element: <ProductdetailPage/>
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
