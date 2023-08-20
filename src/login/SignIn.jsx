import React, { useState } from 'react'
import login from '../images/images (1).jpeg'
import { Link} from "react-router-dom";


import axios from 'axios';
import validation from './validation';
const SignIn = () => {
    const[errors,setErrors] = useState({})
    const [inputs , setInputs] = useState({
		name:"",
		email : "",
		password : ""
	})	

	const handleChange = (e)=>{
	let name = e.target.name 
	let value = e.target.value
	setInputs(
	(prev)=>({...prev , [name] : value})
	)
	}

	const handleSubmit= (e)=>{
	e.preventDefault()
    setErrors(validation(inputs));

	// let infor={email,password};
	const che= /^[a-zA-Z0-9,_]+@[a-z]+\.[a-z]{2-6}$/
        console.log(inputs);
		const body = JSON.stringify(inputs);
		const header = {}
		axios.post("http://localhost:8080/Shop/auth/sign_up.php" ,   body,header)
		.then(res=>{
			console.log(res.data)
		})
	}

    return (
        <div id='signup'>
            <div className='login'>
                <div className='overlay'></div>
                <form onSubmit={handleSubmit}>
                    <img src={login} alt='user' />
                    <h2>signup</h2>
                    <input type='text' value={inputs.name} name="name" className='text' placeholder='name' onChange={handleChange}/>
					{errors.name && <p className='p1' color={{'color' : 'red' , position: 'relative'}}>{errors.name}</p>}
                    <input type='email' value={inputs.email} name="email" className='text1' placeholder='email' onChange={handleChange}/>
					{errors.email && <p className='p2'>{errors.email}</p>}
                    <input type='password'value={inputs.password} name="password" id='password' onChange={handleChange} placeholder='Enter Password' />
					{errors.password && <p className='p3'>{errors.password}</p>}
					<input type='submit' value='signup' />
                    <p> or : <Link to='login' className='link'> Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn