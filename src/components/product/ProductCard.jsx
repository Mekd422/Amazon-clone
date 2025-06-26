import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import Currencyformat from '../currencyformat/Currencyformat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../Dataprovider/Dataprovider'
import { Type } from '../../Utility/action.type'

export default function ProductCard({product, flex, renderDesc, renderAdd}) {
    const {image, title, id, rating, price,description} = product;

    const [state, dispatch]= useContext(DataContext)
    console.log(state)
    const addtoCart = ()=>{
        dispatch(
            {
                type: Type.add_to_basket,
                item: {
                    image, title, id, rating, price,description
                }
            }
        )
    }



  return (
    <div className={`${classes.card__container} ${flex ? classes.product__flexed : ''}`}>

        <Link to ={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
            <div className={classes.rating}>
                {/*rating*/ }
                <Rating value={rating?.rate || 0} precision={0.1} readOnly />
<small>{rating?.count ?? 0}</small>


            </div>
            <div>
                {/*price*/ }
                <Currencyformat amount = {price}/>


            </div>


            {
                renderAdd && <button className={classes.button} onClick={addtoCart}>
                Add to cart
            </button>
            }
            
        </div>
    </div>
  )
}
