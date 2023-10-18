import React,{useRef} from 'react'
// import App from '../../App'
import { useNavigate } from 'react-router-dom'
import Home from '../Home'
import './Login.css'
const Login = () => {
    // const navigate=useNavigate();
    const username=useRef()
    const password=useRef()
    const userN='abc@gmail.com'
    const pass='12345'
    const getEmail=localStorage.getItem("usernameData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(username.current.value=="abc@gmail.com" && password.current.value=="12345"){
            localStorage.setItem("usernameData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
            alert("You have logged successfully");
        }
        // console.log(localStorage.getItem("usernameData"))
    }
    return (
    <div>
    {   getEmail&&getPassword?<Home/> :
        <form>
        <div className='login-container'>
            <img className='logo2' src="data:image/png;base64,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" alt="Diagnal" />
            <div className='h4-head'>
            <b>Login to your Account</b>
            </div>
            <div>
                <input className='login-input' type="text" placeholder='Username' value={userN} ref={username}/>
            </div>
            <div>
                <input className='login-input' type="password" placeholder='Password' value={pass} ref={password}/>
            </div>
            <div>
            <button className='login-btn'onClick={handleSubmit}>Log in</button>
            </div>
            </div>
        </form>
    }
    </div>
  )
}

export default Login