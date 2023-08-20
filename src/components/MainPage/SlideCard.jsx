import React, { useEffect, useRef } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useSelector } from 'react-redux'
import { init } from 'ityped';

const SlideCard = () => {
    const { gategories } = useSelector((state) => state.items)
    console.log(gategories);
    const txtRef = useRef();
    useEffect(() => {
        init(txtRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Xiaomi,,,,,,,,,,,,"],
        })
    }, [])
    // console.log(category)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }
    return (
        <Slider {...settings}>
            {gategories.map((value, index) => {

                return (
                    <>
                        <div className='box d_flex top' key={index}>
                            <div className='left'>
                                <h1>{value.categories_name}</h1>
                                <p>{value.description}</p>
                                {/* <button className='btn-primary'>Visit Collections</button> */}
                                <span ref={txtRef}></span>
                            </div>
                            <div className='right'>
                                <img src={`http://localhost:8080/Shop/upload/${value.img}`} alt='' style={{ width: '200px', hight: '200px' }} />
                            </div>
                        </div>
                    </>
                )
            })}
        </Slider>

    )
}

export default SlideCard