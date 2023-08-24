import React from 'react'

function Footer() {
  const footerStyles = {
    display: 'flex',
    gap: '50px',
    fontSize: '14px',
    width: '100%',
    height: '5vh',
    alignItems: 'center',
    paddingLeft: '20px',
    borderTop: '2px solid #8f848f',
    backgroundColor:'#f5f2f1'
  };
  return (
    <>
      <div style={footerStyles}>
        <p>
          © 2023
        </p>
        <p>
          Moody
        </p>
        <p>
          All Rights Reserved
        </p>
      </div>
    </>
  )
}

export default Footer