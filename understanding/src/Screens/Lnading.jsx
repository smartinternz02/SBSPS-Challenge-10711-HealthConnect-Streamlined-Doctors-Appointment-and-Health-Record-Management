import React from 'react'
import Nav from '../Component/Nav'
import { Link } from 'react-router-dom';
import Im1 from '../Assets/Im1.png'
import './Landing.css'
function Lnading() {
  return (
    <>
      <div>
        <div className='sec1' >

          <img src={Im1} alt=""
            style={{ width: '100%', height: '90%', objectFit: 'cover' }} />

          <div className='leftTitle'>
            <h1 style={{ marginBottom: '10px' }}>Lorem, ipsum dolor.</h1>
            <p style={{ width: '70%', marginBottom: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quia.</p>
            <div className='btn'>
              start  --
            </div>
          </div>

        </div>

        <div className='p2'>
          <h3>Let us know  you</h3>
          <div className='btn'>
            start  --
          </div>
        </div>


      </div>
    </>
  )
}

export default Lnading