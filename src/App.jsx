import { useEffect, useState } from 'react';
import './assets/scss/global.scss';
import DestinationList from './cmps/DestinationList';
import MainHeader from './cmps/MainHeader';
import { useStayStore } from './stores/stay-context';

const App = () => {
  const { stays } = useStayStore();
  const [userLocation, setUserLocation] = useState({ lat: 0, long: 0 });

  const initGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    }
  }

  const success = ({ coords }) => {
    setUserLocation({ lat: coords.latitude, long: coords.longitude })
  }

  const fail = () => {
    console.log('Failed to connect to geolocation services.');
  }

  useEffect(() => {
    initGeoLocation();
  }, [])

  return (
    <>
      <MainHeader />
      <DestinationList stayList={stays} userLocation={userLocation} />
    </>
  );
};

export default App;
