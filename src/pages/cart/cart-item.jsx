import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id, prodName, prodPrice, prodImg } = props.data;
    const {cartItems, addToCart, removeCart} = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={prodImg} alt=''/>
        <div className='description'>
            <p>
                <b>{prodName}</b>
            </p>
            <p>Rs. {prodPrice}</p>
            <div className='countHandler'>
                <button onClick={() => removeCart(id)}>-</button>
                <input value={cartItems[id]} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
};
