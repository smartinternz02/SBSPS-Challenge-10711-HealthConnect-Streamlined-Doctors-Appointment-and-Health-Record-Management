
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios';

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { loginFaliure, loginStart, loginSuccess } from '../redux/userSlice';

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin=async(e)=>{
    e.preventDefault();
    dispatch(loginStart())
    try {
      console.log(email,password);
      const res=await axios.post("http://localhost:8080/api/auth/login",{email,password})
      console.log(res.data);
      dispatch(loginSuccess(res.data));
      const loguser=res.data;
      if(loguser) navigate(`/`)

    } catch (err) {
      console.log(err)
      dispatch(loginFaliure());
    }
  }
  const loginwithgoogle=()=>{
    dispatch(loginStart());
     signInWithPopup(auth,provider).then((data)=>{
       axios.post("http://localhost:8080/api/auth/google",{name:data.user.displayName,email:data.user.email,img:data.user.photoURL}).then((res)=>{
         dispatch(loginSuccess(res.data));
         navigate("/");
       })
     })
     .catch(error=>{
      console.log(error)
       dispatch(loginFaliure())
  })
    console.log("first")
   }
  return (
    <div className='Box'>
      <div className='Box1'>
        <div className='Container'>
          <img src="https://img.freepik.com/free-vector/design-inspiration-concept-illustration_114360-3992.jpg?w=360" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className='Container'>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='Cros'>X</div>
          </Link>
          <h2 style={{ lineHeight: ".8" }}>LOGIN</h2>
          <h4 style={{marginBottom:'10%'}}>For Better Experience</h4>
          <input className='Input' type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}></input>
          <input className='Input' type='password' placeholder='password' onChange={e => setPassword(e.target.value)}></input>
          <br />

          <div className='Buttons' onClick={handleLogin}>Login</div>
          <Link to="/Register" style={{ margin: "10px", fontSize: "16px" }}>forgot password
          </Link>
          <div className='Buttons' onClick={loginwithgoogle} style={{ width: "70%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",marginTop:'5%' }}><p>Login with google</p> <i class="ri-google-fill"></i></div>

        </div>
      </div>
    </div>
  )
}

