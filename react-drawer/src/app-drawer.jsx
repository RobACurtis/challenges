import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';


export default function AppDrawer() {
  const [menu, showMenu] = useState(false);

 const toggleMenu = e => {
    if (e.target.id === 'menu-icon') {
      showMenu(true);
    } else {
      showMenu(prevMenu => (!prevMenu));
    }
  }

return (
  <div onClick={toggleMenu}>
    <img src="../react.png" alt="react" />
    <div className={`icon`}>
      <i> <FaBars id="menu-icon" onClick={toggleMenu} /> </i>
    </div>
    <div id="drawer" className={ (menu) ? '' : 'hidden'}>
      <div className="background-image"></div>
      <div className='menu'>
        <ul>
          <h3>Menu</h3>
          <li>About</li>
          <li>Get Started</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  </div>
);
}
