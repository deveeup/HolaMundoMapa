import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Layout from '../../components/layout';
import icon from './icon.jpg'
import { STYLES_MAP } from './mapStyle';
import './styles.scss';

const Maps = props => {

  const onClick = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    //agregar nombre
    //agregar maker
    //hacer render de otro map y sale
  }
  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
       styles: STYLES_MAP
    });
  };

  return (
    <Layout>
      <div className="MapContainer">
        <Map
          google={props.google}
          zoom={12}
          onClick={onClick}
          className="Map"
          initialCenter={{
            lat: 4.624335,
            lng: -74.063644
          }}
          onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        >
        <Marker
          key="{item.id}"
          name="item.name"
          position={{ lat: 4.624335, lng: -74.063644 }}
          img="{item.image}"
          icon={{
            url: icon,
            anchor: new props.google.maps.Point(16, 16),
            scaledSize: new props.google.maps.Size(25, 30),
          }}
        />
        </Map>
      </div>
    </Layout>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBERa9loc2xvkdYN0ndMMyuwq9FE3Ij1tc',
})(Maps);