import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import classes from '../Header/Header.module.css'
import amazonLogo from '../../assets/amazon assets/amazon-logo.png';
import Americanflag from '../../assets/amazon assets/icons8-usa-48.png'
import { BiCart } from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import Lowerheader from '../Header/Lowerheader';
import { DataContext } from '../Dataprovider/Dataprovider';




export default function Header() {

    const [state, dispatch] = useContext(DataContext);
    const { basket } = state;
    console.log(dispatch);
    const totalItem = basket?.reduce((amount, item) =>{
        return item.amount + amount
    }, 0)
  return (
    <section className= {classes.fixed}>
        <section>
        <div className={classes.header__container}>
            <div className={classes.logo__container}>
                <Link to="/">
                    <img src={amazonLogo} alt="amazonlogo" />
                </Link>
                <div className={classes.delivery}> 
                    <span>
                        
                    </span>
                    <div>
                    <p>Delivered to </p>
                    <span>
                        Ethiopia

                    </span>
                </div>
                </div>

            </div>
            <div className={classes.search}>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" placeholder='Search product'/>
                <BsSearch size ={25}/>
                
            </div>
            <div className={classes.order__container}>
                <Link to="https://www.amazon.com/" className={classes.languages}>
                    <img src={Americanflag} alt="" />
                    <select>
                        <option value="">En</option>
                    </select>
                </Link>
                <Link to="/Auth">
                    <div>
                        <p>sign in</p>
                        <span>account and lists</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div>
                        <p>returns</p>
                        <span>& orders</span>
                    </div>
                </Link>
                <Link to="/cart" className={classes.cart}>
                    <BiCart size={35} />
                    <span>{totalItem}</span>
                </Link>
            </div>
        </div>
        <Lowerheader/>

    </section>
    </section>
    
    
  )
}
