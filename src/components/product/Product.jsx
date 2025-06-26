import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'

export default function Product() {
  const [products, setProducts] = useState([])
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) =>{
      setProducts(res.data)
      setisLoading(false)
    }).catch((err) =>{
      console.log(err)
      setisLoading(false)

    })
    
  }, [])
  

  return (
    <>
    {
      isLoading?(<Loader/>) : (<section className={classes.products__container}>
        {
          products.map((singleProduct) =>{
            return <ProductCard renderAdd={true} product = {singleProduct} key = {singleProduct.id} />
          })
        }
      </section>)
    }
    </>
    
  )
}
