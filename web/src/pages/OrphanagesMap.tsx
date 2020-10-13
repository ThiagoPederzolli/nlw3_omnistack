import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';
function OrphanagesMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianaças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Pelotas</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
      <Map  center={[-31.7534021,-52.3350085]} zoom={15} style={{ width: '100%', height: '100%' }}>
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      <Link to=""className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;