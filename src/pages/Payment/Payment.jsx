import React, {useContext} from 'react'
import classes from './Payment.module.css'
import { DataContext } from '../../components/Dataprovider/Dataprovider';
import ProductCard from '../../components/product/ProductCard'


import LayOut from '../../components/LayOut/LayOut'

export default function Payment() {

  const [{basket}] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) =>{
        return item.amount + amount
    }, 0);
  return (
    <LayOut>
      {/*header */}
      <div className={classes.payment__header}>Checkout ({totalItem}) items</div>
      {/*payment method */}
      <section className={classes.payment}>
        {/*address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>123 react</div>
            <div>chicago</div>
          </div>
        </div>
        <hr />

        {/*product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {
              basket?.map((item)=><ProductCard product={item} flex={true}/>)
            }
          </div>
        </div>
        <hr/>

        {/*card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div>
            <div>
              <form action="">
                
              </form>
            </div>

          </div>
        </div>
      </section>
                
        </LayOut>
  );
}
