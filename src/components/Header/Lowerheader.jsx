import React from 'react'
import classes from '../Header/Header.module.css'
import { IoMenu } from "react-icons/io5";

export default function Lowerheader() {
  return (
    <div className={classes.lower__container}>
        <ul>
            <li>
                <IoMenu />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Customer services</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}