import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginFaliure, logout } from '../redux/userSlice';

function Nav() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  }
  console.log(currentUser.currentuser.name)
  return (
    <div style={{ height: '10vmin', width: '100%', backgroundColor: '#e4c3e5', display: 'flex', alignItems: 'center', padding: 20, fontSize: '3vmin', fontWeight: '400', zIndex: 9, boxShadow: 'inset 0 -2px 0vw #d7b4c8' }}>
      <div style={{ width: '40vw' }}>
        Nav
      </div>
      {currentUser.currentuser ?
        <div style={{
          width: '60vw', display: 'flex', justifyContent: 'flex-end', gap:
            '20px'
        }}>
          <div style={{ width: 'fit-content', padding: '7px 15px', borderRadius: '30px', backgroundColor: ' #d65485', textDecoration: 'none', color: 'white', cursor: 'pointer' }}
            onClick={handleLogout}>
            Logout
          </div>
        </div> 
        :
        <div style={{
          width: '60vw', display: 'flex', justifyContent: 'flex-end', gap:
            '20px'
        }}>
          <Link to="/Register" style={{ width: 'fit-content', padding: '7px 15px', borderRadius: '30px', backgroundColor: ' #d65485', textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
            signUp
          </Link>
          <Link to="/Login" style={{ width: 'fit-content', padding: '7px 15px', borderRadius: '30px', backgroundColor: ' #d65485', textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
            signIn
          </Link>
        </div>
      }

    </div>
  )
}

export default Nav