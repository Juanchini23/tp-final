import React, { useCallback } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/icons/gota.png';

export default function Nav({ activeMenu }) {
  const navLinkClass = useCallback((navData) => {
    return navData.isActive ? 'active' : '';
  }, []);

  return (
    <div className={`nav-component ${activeMenu}`}>
      <div className="isologo">
        <div className="logo">
          <img alt="" src={logo} />
        </div>
        <div className="h3">
          <h3>A.J Training</h3>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/aS" className={navLinkClass}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/asd" className={navLinkClass}>Rutina</NavLink>
        </li>
        <li>
          <NavLink to="/ss" className={navLinkClass}>Plan nutricional</NavLink>
        </li>
        <li>
          <NavLink to="/as" className={navLinkClass}>Ajustes</NavLink>
        </li>
      </ul>
    </div>
  );
}
