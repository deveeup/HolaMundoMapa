import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Menu from '../menu';


const Header = () => {
  const { app } = useSelector(state => state.user);
  const [ menu, setMenu ] = useState(false);

  return (
    <header>
      <h1>{app}</h1>
      <span onClick={ () => setMenu(!menu) }>
        { !menu ? 'Menú' : 'Cerrar'}
      </span>
      { menu &&<Menu /> }
    </header>
  );
};

export default Header;
