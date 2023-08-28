import React from 'react';
import '../styles/Anim.css'
const Anim = () => {
    return (
        <div className="center">
          {[...Array(15)].map((_, index) => (
            <div key={index} className={`wave wave-${index + 1}`}></div>
          ))}
        </div>
      );
    };
    
export default Anim;
