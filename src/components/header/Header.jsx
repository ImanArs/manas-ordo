import React from 'react'
import { Link } from 'react-router-dom';
import BurgerMenu from './burgerMenu/BurgerMenu';
import ChangeLanguage from './changeLang/ChangeLang';
const Header = ({ setInfo, info }) => {
  return (
    <header className="header">
      <Link to='/'>
        <img src="/logo.png" alt="" />
      </Link>
      <ChangeLanguage setInfo={setInfo} info={info} />
      <BurgerMenu />
    </header>
  );
}

export default Header