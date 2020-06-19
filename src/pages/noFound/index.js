import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import Logo from '../../assets/img/notFound.gif';
import { useSelector } from 'react-redux';
import { PathRoutes, ES_TEXTS, EN_TEXTS } from '../../constants';
import './styles.scss';

const NoFound = () => {
  const info = useSelector(state => state.user);
  const ES = ES_TEXTS;
  const EN = EN_TEXTS;
  return (
    <Layout>
      <div className="Container">
        <img src={Logo} alt=""/>
        <h1>
          {info.langEN ? EN.notFound : ES.notFound}
        </h1>
        <Link to={PathRoutes.MAIN}>
          {info.langEN ? EN.backHome : ES.backHome}
        </Link>
      </div>
    </Layout>
  );
}

export default NoFound;
