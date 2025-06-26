import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'

export default function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/auth" element={<Auth/>}></Route>
            <Route path="/payments" element={<Payment/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/category/:categoryName" element={<Results/>}></Route>
            <Route path="/products/:productId" element={<ProductDetail/>}></Route>
            
        </Routes>

    </Router>
  )
}
