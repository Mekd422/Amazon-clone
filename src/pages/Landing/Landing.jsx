import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import Product from '../../components/product/Product'
import LayOut from '../../components/LayOut/LayOut'

export default function Landing() {
  return (
    <LayOut>
        <Carousel/>
        <Category/>
        <Product/>
    </LayOut>
  )
}
