import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import classes from './Carousel.module.css'

export default function CarouselComponent() {
  return (
    <div>
        <Carousel 
        autoPlay = {true}
        infiniteLoop = {true}
        showIndicators = {true}
        showThumbs = {false}
        >
          {
            img.map((imageItemLink) =>{
              return <img key={imageItemLink}
               alt='carousel_img' src={imageItemLink}/>
            })
          }
        

        </Carousel>
        <div className={classes.hero__img}></div>

    

    </div>
  )
}


