import React, { useState } from 'react'
import '../styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { loginFaliure, loginStart, loginSuccess } from '../redux/userSlice';




function Register() {

  const navigate=useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch=useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
      try {
        console.log({name,email,password})
        const res=await axios.post("http://localhost:8080/api/auth/signup",{name,email,password})
        .then((res)=>{
        dispatch(loginSuccess(res.data));
        console.log(res.data);
        navigate("/");
      })
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
          <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className='Container'>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='Cros'>X</div>
          </Link>
          <h2 style={{ lineHeight: ".8" ,}}>SIGNUP</h2>
          <h4 style={{marginBottom:'10px'}}>For Better Experience</h4>
          <input className='Input' type='text' placeholder='name' value={name} onChange={e => setName(e.target.value)}></input>
          <input className='Input' type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
          <input className='Input' type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
          <br />

          < div className='Buttons' onClick={handleSignup}>signup</div>

            <Link to="/login" style={{textDecoration:'none'}}>
              <div className='Buttons' style={{ backgroundColor: "red",margin:'10px 0px' }}>Already have an account</div>
            </Link>

            <div className='Buttons' onClick={loginwithgoogle} 
            style={{ width: "70%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}><p>Login with google</p> <i class="ri-google-fill"></i>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Register