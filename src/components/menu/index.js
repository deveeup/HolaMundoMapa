import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to ="/">Inicio</Link>
        </li>
        <li>
          <Link to ="/places">Lugares guardados</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

