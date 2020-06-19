import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDataUser } from '../../actions/user';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Modal from './modal';
import icon from '../../assets/img/icon.svg';
import { STYLES_MAP_DARK } from './mapStyle';
import './styles.scss';

const RenderMap = props => {
  const stylesMap = props.darkTheme ? STYLES_MAP_DARK : [];
  const [ currentPlace, setPlace ] = useState({ lat: null, lng: null }); 
  const [infoMarker, setInfoMarker] = useState({
    isOpen: false,
    marker: {},
    place: {},
  });
  const info = useSelector(state => state.user);
  const dispatch = useDispatch();
  const addUserData = useCallback(
    userData => dispatch(addDataUser(userData)),
    [dispatch]
  );
  const onClick = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setPlace({ lat, lng });
    addUserData({
      ...info,
      modal: true
    });
  }
  const onMarkerClick = (props, marker) => {
    setInfoMarker({
      place: props,
      marker: marker,
      isOpen: true,
    });
  };
  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
       styles: stylesMap 
    });
  };
  const handleCenter = () => {
    return props.infoMap ? { lat: props.infoMap, lng: props.infoMap.lng } : null;

  }
  return (
    <div className="MapContainer">
      {info.modal && <Modal currentPlace={currentPlace} />}
      <Map
        google={props.google}
        zoom={12}
        onClick={onClick}
        className="Map"
        initialCenter={{
          lat: info.home.lat,
          lng: info.home.lng
        }}
        center={handleCenter()}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
      >
        {info.places.length > 0 && info.places.map(marker => {
          return (
            <Marker
              key={marker.id}
              name={marker.name}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: icon,
                anchor: new props.google.maps.Point(16, 16),
                scaledSize: new props.google.maps.Size(25, 30),
              }}
              onClick={(props, marker) => { onMarkerClick(props, marker) }}
            />
          );
        })}
        <InfoWindow marker={infoMarker.marker} visible={infoMarker.isOpen}>
          <div className="popup">
            <span className="popup-text">{infoMarker.place.name}</span>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_URL_API_KEY,
})(RenderMap);