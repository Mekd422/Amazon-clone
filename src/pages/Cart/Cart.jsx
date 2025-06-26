import React, { useContext } from 'react'
import  LayOut from '../../components/LayOut/LayOut'
import ProductCard from '../../components/product/ProductCard'
import { DataContext } from '../../components/Dataprovider/Dataprovider'
import Currencyformat from '../../components/currencyformat/Currencyformat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import { Type } from '../../Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export default function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext)
  console.log(user, dispatch)
  const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  }, 0)


  const increment = (item)=>{
    dispatch({
      type:Type.add_to_basket,
      item
    })
  }

  const decrement = (id)=>{
    dispatch({
      type: Type.remove_from_basket,
      id
    })

  }
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {
            basket?.length === 0?(<p>Opps! No item in your cart</p>):(
              basket?.map((item, i) =>{
                return <section className={classes.cart__product}>
                  <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                flex={true}
                renderAdd={false}/>
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={()=>increment(item)}>
                  <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={()=>decrement(item.id)}>
                    <IoIosArrowDown size={30}/>
                  </button>
                </div>
                
                </section>
              })
            )
          }
        </div>
        {
          basket?.length !== 0 &&(
            <div className={classes.subtotal}>
              <div>
              <p>Subtotal ({basket?.length} item)</p>
              <Currencyformat amount= {total}/>
            </div>
            <span>
              <input type='checkbox'/>
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
            </div>
          )
        }
      </section>
                    
            </LayOut>
  )
}
