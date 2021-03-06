import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout';
import RenderMap from '../../components/map';
import icon from '../../assets/img/icon.svg';
import discover from '../../assets/img/discover.png';
import { ES_TEXTS, EN_TEXTS } from '../../constants';
import './styles.scss';

const PlacesPage = () => {
  const info = useSelector(state => state.user);
  
  const { places, home } = info;
  const [infoMap, setInfoMap] = useState({
    lat: home.lat,
    lng: home.lng
  });
  const handlePlaces = (lat, lng) => {
    return setInfoMap({ lat, lng });
  };
  const ES = ES_TEXTS;
  const EN = EN_TEXTS;

  return (
    <Layout>
      <div className="containerPlaces">
        <div className="containerPlaces-list">
          <h1>
            {places.length !== 0 && <img src={icon} alt={`${EN.alt} - icono`}/>} 
            {places.length === 0 
              ? (info.langEN ? EN.dontPlaceTitle : ES.dontPlaceTitle) 
              : (info.langEN ? EN.placesTitle : ES.placesTitle)}
          </h1>
          <div className="containerPlaces-list-box">
            {places.length === 0 ? (
              <>
                <img src={discover} alt={`${EN_TEXTS.alt} - No places`}/>
                <p>{info.langEN ? EN.dontPlaceText : ES.dontPlaceText}</p>
              </>
            ) : places.map(place => {
              return (
                <span key={place.id} onClick={() => handlePlaces(place.lat, place.lng)}>
                  {place.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="containerPlaces-map">
          <RenderMap darkTheme={false} infoMap={infoMap} />
        </div>
      </div>
    </Layout>
  );
};

export default PlacesPage;
