import React, {useContext} from 'react'
import classes from './Payment.module.css'
import { DataContext } from '../../components/Dataprovider/Dataprovider';


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
        <div>
          <h3>Delivery Address</h3>
          <div>
            <div>abe@email.com</div>
            <div>123 react</div>
            <div>chicago</div>
          </div>
        </div>
        <hr />

        {/*product */}
        <div></div>
        <hr/>

        {/*card form */}
        <div></div>
      </section>
                
        </LayOut>
  );
}
