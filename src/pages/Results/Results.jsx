import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/product/ProductCard'
import Loader from '../../components/Loader/Loader'

export default function Results() {
    const [results, setResults] = useState([])
    const { categoryName } = useParams()
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        axios.get(`${productUrl}/products/category/${categoryName}`)
            .then((res) => {
                setResults(res.data)
                setisLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setisLoading(false)
            })
    }, [categoryName])

    return (
        <LayOut>
            <section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <p style={{ padding: "30px" }}>Category / {categoryName}</p>
                <hr />
                {
                    isLoading? (<Loader/>) : (<div className={classes.products__container}>
                        {results?.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                renderDesc={false}
                                renderAdd={true}

                            />
                        ))}
                    </div>)
                }
            </section>
        </LayOut>
    )
}
