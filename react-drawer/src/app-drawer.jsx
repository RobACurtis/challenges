import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';


export default function AppDrawer() {
  const [menu, showMenu] = useState(false);

 const toggleMenu = e => {
    if (e.target.id === 'bars') {
      showMenu(true);
    } else if (menu) {
      showMenu(false);
    }
  }

return (
  <div onClick={toggleMenu}>
    <div id="menu-icon" onClick={toggleMenu} >
      <FaBars id='bars' className={(menu) ? 'opacity' : ''}/>
    </div>
    <div id="drawer" className={ (menu) ? '' : 'opacity'}>
      <div className="background-image"></div>
      <div className={`menu ${(menu) ? 'is-on' : ''}`}>
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
