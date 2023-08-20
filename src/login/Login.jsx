import axios from 'axios';
import React from 'react'
import {  useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import image from '../../src/images/im2 (1).jpg'
import './login.css'
import validation from './validation';

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const[error,setError]=useState(false)
    
const navigate = useNavigate()

const handleSubment= (e)=>{
	e.preventDefault()
    if(email === null && email === " "){
        setError(true)
        console.log("mmmm")
    }
	// let infor={email,password};
    let infor={email,password};
        console.log(infor);
		const body = JSON.stringify({email , password});
	
		const header = {'content-type':'application/json'};
		axios.post("http://localhost:8080/Shop/auth/login.php"  ,body,
        header )
		.then((res)=>{
		var response=	res.data;
        if(response.status == 'success'){
            localStorage.setItem('id',response.data.user_id);
            navigate("/")
            console.log(res.data)
        }else{
            alert('fali')  
        }
		})
	}

    return (
        <div id='logIn'>
            <div  className='login'>
                <div className='overlay'></div>
            <form onSubmit={handleSubment}>
                <img src={image} alt='user'/>
                <h2>login</h2>
                <input type='text' className='text2'  value={email} placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} />
                {error? <p>email is not avalidate</p> : ''}
                <input type='password' className='pass' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter Password' />
                {/* {password !== password && accept && <p>password is not avalidate</p>} */}
                {error? <p>password is not avalidate</p> : ''}
                <input type='submit' value='login' />
                <p>need an accont : <Link to='signup' className='link'>Sign Up</Link></p>
            </form>
            </div>
        </div>
    )
}

export default Login