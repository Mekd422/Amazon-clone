import React, { useEffect,useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/product/ProductCard'
import Loader from '../../components/Loader/Loader'

export default function ProductDetail() {
  const {productId} = useParams()
  const [products, setProducts] = useState({})
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res) =>{
      setProducts(res.data)
      setisLoading(false)
    }).catch((err) =>{
      console.log(err)
      setisLoading(false)
    })
    
  }, [productId])
  
  return (
    <LayOut>
      {isLoading? (<Loader/>): (<ProductCard  product = {products} flex = {true} renderDesc ={true} renderAdd={true}/>)}
      


                
        </LayOut>
  )
}
