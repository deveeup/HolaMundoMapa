import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addDataUser } from '../../actions/user';
import { ES_TEXTS, EN_TEXTS } from '../../constants';
import './styles.scss';

const Menu = () => {
  const info = useSelector(state => state.user);
  const dispatch = useDispatch();
  const addUserData = useCallback(
    userData => dispatch(addDataUser(userData)),
    [dispatch]
  );
  const ES = ES_TEXTS;
  const EN = EN_TEXTS;
  const handleLanguage = () => {
    addUserData({
      ...info,
      langEN: !info.langEN
    });
  };

  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to ="/">{info.langEN ? EN.home : ES.home}</Link>
        </li>
        <li>
          <Link to ="/places">{info.langEN ? EN.placesTitle : ES.placesTitle}</Link>
        </li>
        <li>
          <span onClick={() => handleLanguage()}>
            {info.langEN ? `${EN.changeLanguage} spanish` : `${ES.changeLanguage} inglés`}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

