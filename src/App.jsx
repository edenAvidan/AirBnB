import './assets/scss/global.scss';
import { observer } from 'mobx-react-lite';
import MainHeader from './cmps/MainHeader';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StayDetails from './pages/StayDetails';
import { useEffect } from 'react';
import { useStore } from './stores';

const App = () => {
  const { app } = useStore();
  useEffect(() => {
    app.setStays();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="stay/:id" element={<StayDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default observer(App);
