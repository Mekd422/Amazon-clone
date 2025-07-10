import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import {CheckoutProvider, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe('pk_test_51RhqL9R2sCiX9W8h1Y8rv8crUAV5BOuaZT6XTswuvzb3S1pdvRUN7jdovMdbroaAEeFbLBXPphDD828eIcI4LL360077TZb2rI');

export default function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/auth" element={<Auth/>}></Route>
            <Route path="/payments" element={
              <ProtectedRoute 
              msg={"you must log in to pay"}
              redirect={'/payments'}>
                <Elements stripe={stripePromise}>
                <Payment/>
              </Elements>
              </ProtectedRoute>
            }/>
            <Route path="/orders" element={
              <ProtectedRoute msg={"you must log in to see your orders"}
              redirect={'/orders'}>
                <Orders/>
              </ProtectedRoute>

            }></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/category/:categoryName" element={<Results/>}></Route>
            <Route path="/products/:productId" element={<ProductDetail/>}></Route>
            
        </Routes>

    </Router>
  )
}
