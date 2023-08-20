import React from "react"
import "./Cart.css"
import CartItem from "./CartItem";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { useSelector } from "react-redux";

const Cart = () => {
    const { items } = useSelector((state) => state.items)

    const { cartItems } = useShoppingCart();

    return (
        <>
            <section id='cart' className='cart-items'>
                <div className='container d_flex'>
                    <div className='cart-details'>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                         
                    </div>
                    <div className='cart-total product'>
                        <h2>Cart Summary</h2>
                        <div className=' d_flex'>
                            <h4>Total Price :</h4>
                            <h3>${cartItems.reduce((total, cartItem) => {
                const item = items.find((i) => i.item_id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}.00</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart