import './Header.css'
import { Link } from 'react-router-dom'
import { SlLock} from "react-icons/sl";

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label>16775</label>
                        <i className='fa fa-envelope'></i>
                        <label>Xiaomi</label>
                    </div>
                    <div className='right row RText'>
                    <ul className='f_flex'>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='logIn' className='login'>LogIn <SlLock className='lock'/></Link>
                        </li>
                    </ul>
                    </div>
                </div>
                
            </section>
        </>
    )
}
export default Head
