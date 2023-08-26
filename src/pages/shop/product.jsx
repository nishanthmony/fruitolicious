import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const { id, prodName, prodPrice, prodImg } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);


    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={prodImg} alt=''/>
        <div className='description'>
            <p><b>{prodName}</b></p>
            <p>₹ {prodPrice}</p>
        </div>
        <button className='addtocartbutton' onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>

    </div>
  );
};


// eslint-disable-next-line= it is used to remove warnings on unused variables on the next line