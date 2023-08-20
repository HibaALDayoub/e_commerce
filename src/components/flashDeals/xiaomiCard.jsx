import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useDispatch, useSelector } from "react-redux"
import { useShoppingCart } from "../../context/ShoppingCartContext"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}
const FlashCard = () => {
    
    const { items } = useSelector((state) => state.items)

    const [subCat , setSubCat] = useState()
    const catFitler = "all" // 1 , 2 ,3 , 4, default all return all data without filer
    // create dispatch and get data from it when click on each cat in ui
    // redux  
    useEffect(()=>{
        if(catFitler == "all"){
            setSubCat(items)
        }else{
            setSubCat(
                items.filter((el)=>{
                    return(
                        el.category_id === catFitler
                    )
                }))
        }
    },[catFitler])


    const {
        getItemQuantity,
        increaseCartQuantity,
        } = useShoppingCart();

    //   const quantity = getItemQuantity(id);
    // console.log(quantity)

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    console.log(subCat)
    return (
        <>
            <Slider {...settings}>
                {items.map((productItems) => {
                    
                
                    const quantity = getItemQuantity(productItems.item_id);
                    // console.log(quantity)
                    // console.log(productItems.item_id)
                    
                    return (
                        <div className='box'>
                            <div className='product mtop'>
                                <div className='img'>
                                    {/* <span className='discount'>{productItems.discount}% Off</span> */}
                                    <img src={`http://localhost:8080/Shop/upload/${productItems.img}`} alt='' />
                                    <div className='product-like'>
                                        {/* <label>{productItems.img}</label> <br /> */}
                                        <i className='fa-regular fa-heart' onClick={increment}></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{productItems.item_name}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${productItems.price}.00 </h4>
                                        <button>
                                        {/* {Login ?   <i className='fa fa-plus' onClick={() => increaseCartQuantity(productItems.item_id)}></i>
                                            : ' '} */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default FlashCard