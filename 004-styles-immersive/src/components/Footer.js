import React from 'react';

export const Footer = () =>{
    const date = new Date().getFullYear()
    return(
        <div className="d">
          <div className="d-inner">
             <span>logo - © {date}</span>
          </div>
        </div>
        )
}
