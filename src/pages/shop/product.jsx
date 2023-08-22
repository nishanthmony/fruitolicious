import React from 'react'
import {useState} from 'react'

export const Product = (props) => {
    const { prodName, prodPrice, prodImg } = props.data;
    const [text, count] = useState(0)
    const incval=() => {
      count(text+1)
    }
    const decval = () => {
      count(text-1)
    }
  return (
    <div className='product'>
        <img src={prodImg} alt=''/>
        <div className='description'>
            <p><b>{prodName}</b></p>
            <p>₹ {prodPrice}</p>

        </div>
        <button className='addtocartbutton'>Add To Cart</button>
        <button onClick={incval} className='incButton'>+</button>
        <h2>{text}</h2>
        <button onClick={decval} className='decButton'>-</button>
    </div>
  )
}
