import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/productlist/Components/Productlist'
import LoginPage from './LoginPage'
import Signup from '../features/auth/Components/Signup'

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList/>
      </Navbar>
    </div>
  )
}

export default Home;
