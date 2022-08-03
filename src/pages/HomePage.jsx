import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import DestinationList from '../cmps/DestinationList';
import { useStore } from '../stores';

const HomePage = () => {
  const [userLocation, setUserLocation] = useState({ lat: 0, long: 0 });
  const { app } = useStore();

  const initGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    }
  };

  const success = ({ coords }) => {
    setUserLocation({ lat: coords.latitude, long: coords.longitude });
  };

  const fail = () => {
    console.log('Failed to connect to geolocation services.');
  };

  useEffect(() => {
    initGeoLocation();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {app.stays?.length && (
        <DestinationList stayList={app.stays} userLocation={userLocation} />
      )}
    </div>
  );
};

export default observer(HomePage);
