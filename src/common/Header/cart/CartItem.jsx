import React from 'react'
import { useSelector } from 'react-redux'
import { useShoppingCart } from '../../../context/ShoppingCartContext';

const CartItem = ({ id, quantity }) => {

    const { items } = useSelector((state) => state.items)
    const {
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    // const { closeCart, cartItems } = useShoppingCart();

    const item = items.find((i) => i.item_id === id);
    const prodprice = item.price * quantity;
    console.log(item)
    // console.log(quantity)

    if (item == null) return null;
    return (

        <div>
            <div className='cart-list product d_flex' key={item.item_id}>
                <div className='img'>
                    <img src={`http://localhost:8080/Shop/upload/${item.img}`} alt='' />
                </div>
                <div className='cart-details'>
                    <h3>{item.item_name}</h3>
                    <h4>
                        ${item.price}.00
                        <span> ${prodprice}</span><br></br><br></br>
                        quantity : {quantity}
                        
                    </h4>
                    <p><h3>Description:</h3>{item.description_item}</p>
                </div>
                <div className='cart-items-function'>
                    <div className='removeCart'>
                        <button className='removeCart' onClick={() => removeFromCart(item.item_id)}>
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                    </div>
                    <div className='cartControl d_flex'>
                        <button className='incCart' onClick={() => increaseCartQuantity(item.item_id)}>
                            <i className='fa-solid fa-plus'></i>
                        </button>
                        <button className='incCart' onClick={() => decreaseCartQuantity(item.item_id)}>
                            <i className='fa-solid fa-minus'></i>
                        </button>
                    </div>
                </div>
                <div className='cart-item-price'></div>
            </div>
        </div>
    )
}
export default CartItem;
