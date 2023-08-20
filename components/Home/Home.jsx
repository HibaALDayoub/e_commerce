import './Home.css'
import right from '../../images/right.jpg'
import {init} from 'ityped';
import { useEffect , useRef} from 'react';

const Home = () => {
  const txtRef = useRef();
  useEffect(()=>{
    init(txtRef.current, {
      showCursor: true,
      backDelay:  1500,
      backSpeed:  60,
      strings: ["welcome to Golden Mobile" ],
    })
  },[])
    return (
        <div className='Home'>
            <div className='left'>
              <div className="all-text">
                <h1>Draw your dream with us</h1>
                <h2>Golden Mobile is closer to you, as you need all the products, devices and accessories you will find only in Golden Mobile</h2>
                  
                <h3 className='h3'>Wherever you are, <span ref={txtRef}></span>
                  </h3>
              </div>
            </div>
            <div className='right'>
              <div className='imgContainer'>
                <img
                src={right} alt='' />
              </div>
            </div>
        </div>
    )
}

export default Home