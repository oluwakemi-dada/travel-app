import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import styles from '../styles/Map.module.css';

const Map = () => {
  // const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams, setMapPosition, setSearchParams);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
