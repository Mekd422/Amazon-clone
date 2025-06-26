import React from 'react'
import Header from '../Header/Header'

export default function LayOut({children}) {
  return (
    <div>
        <Header/>
        {children}

    </div>
  )
}
