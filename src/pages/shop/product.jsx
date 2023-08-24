import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const { prodId, prodName, prodPrice, prodImg } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
  return (
    <div className='product'>
        <img src={prodImg} alt=''/>
        <div className='description'>
            <p><b>{prodName}</b></p>
            <p>₹ {prodPrice}</p>
        </div>
        <button className='addtocartbutton' onClick={() => addToCart(prodId)}>
          Add To Cart {}
        </button>
{/*
        <button onClick={incval} className='incButton'>+</button>
        <h2>{text}</h2>
        <button onClick={decval} className='decButton'>-</button>
*/}
    </div>
  )
}