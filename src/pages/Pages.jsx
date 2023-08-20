import React from 'react'
import FlashDeals from '../components/flashDeals/xiaomiDeals'
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Home from '../components/MainPage/Home';


const Pages = () => {
    return (
        <div>
                <Home/>
                <FlashDeals />
            {/* <Routes>
                    <Route path="/" element={<><Home /></>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/concat" element={<Concat />} />
                </Routes> */}
        </div>
    )
}

export default Pages