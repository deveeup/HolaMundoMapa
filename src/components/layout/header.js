import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Menu from '../menu';
import { ES_TEXTS, EN_TEXTS } from '../../constants';

const Header = () => {
  const ES = ES_TEXTS;
  const EN = EN_TEXTS;
  const info = useSelector(state => state.user);
  const [ menu, setMenu ] = useState(false);

  return (
    <header>
      <h1>{info.app}</h1>
      <span onClick={ () => setMenu(!menu) }>
        {!menu 
          ? (info.langEN ? EN.menu : ES.menu) 
          : (info.langEN ? EN.close : ES.close)}
      </span>
      {menu && <Menu />}
    </header>
  );
};

export default Header;
