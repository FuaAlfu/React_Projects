import React from 'react';

export default function Header() {
  return (
    <>
       <nav className="header">
       <span className="header-logo">Globalize</span>
       <ul>
          <li>CONTACT US</li>
          <li>ABOUT US</li>
          <li>MENU</li>
          <li>SHOP</li>
          <li>HOME</li>
       </ul>
       {/*end of ul*/}    

       <span className="header-account">MY Account</span>
       <span className="header-user">user-nda</span>
       </nav>
    </>
  );
}
