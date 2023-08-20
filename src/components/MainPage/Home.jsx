import React from 'react'
import Categories from "./Categories"
// import { useSelector } from 'react-redux'
import "./Home.css"
import SliderHome from "./Slider"

import { useDispatch , useSelector} from 'react-redux'
import { useEffect } from "react"
import { getInformation } from "../../store/item/ecommerceSlice"
import Navbar from '../../common/Header/Navbar'

const Home = () => {
    // const { informations } = useSelector((state) => state.informations)

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getInformation())
    },[dispatch]);
    return (
        <section className='home'>
        <Navbar />

            <div className='container d_flex'>
                <Categories />
                <SliderHome />
            </div>
        </section>
    )
}

export default Home