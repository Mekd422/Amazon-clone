import React from 'react'
import {categoryInfos} from './categoryFullinfos'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'

export default function Category() {
  return (
    <section className={classes.category__container}>
        {
            categoryInfos.map((infos) =>{
                return <CategoryCard data = {infos}/>
            })
        }
    </section>
  )
}
