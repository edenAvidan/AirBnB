import {useStayStore} from '../stores/stay-context';
import {useEffect, useState} from 'react';
import DestinationList from '../cmps/DestinationList';

const HomePage = () => {
  const {stays} = useStayStore();
  const [userLocation, setUserLocation] = useState({lat: 0, long: 0});

  const initGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    }
  };

  const success = ({coords}) => {
    setUserLocation({lat: coords.latitude, long: coords.longitude});
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
      <DestinationList stayList={stays} userLocation={userLocation} />
    </div>
  );
};

export default HomePage;
