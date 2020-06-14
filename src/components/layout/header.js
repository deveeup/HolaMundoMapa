import React, { useState } from 'react';
import Menu from '../menu';


const Header = () => {

  const [ menu, setMenu ] = useState(false);

  return (
    <header>
      <h1>mapita</h1>
      <span onClick={ () => setMenu(!menu) }>
        { !menu ? 'Menú' : 'Cerrar'}
      </span>
      { menu &&<Menu /> }
    </header>
  );
};

export default Header;
