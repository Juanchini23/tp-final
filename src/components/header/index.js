import React, { useState } from 'react';
import './styles.scss';
import menuBtn from '../../assets/img/menu.svg';
import dropDown from '../../assets/img/sign_out.svg';
import Nav from '../nav';

export default function Header() {
  const [menuMobile, setMenuMobile] = useState('');
  const userEmail = 'Juan Manchini';

  return (
    <div className="header-component">
      <button type="button" className="mobile-btn" onClick={() => setMenuMobile('active')}>
        <img alt="" src={menuBtn} />
      </button>
      <button type="button" className={`mobile-background ${menuMobile}`} onClick={() => setMenuMobile(' ')}> </button>
      <div className="user-name">
        {userEmail}
        <img className="dropdown-icon" alt="" src={dropDown} />
      </div>
      <Nav activeMenu={menuMobile} />
    </div>
  );
}
