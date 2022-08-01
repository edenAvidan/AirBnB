import './assets/scss/global.scss';
import MainHeader from './cmps/MainHeader';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StayDetails from './pages/StayDetails';

const App = () => {
  const setFilterBy = () => {};
  return (
    <>
      <MainHeader setFilterBy={setFilterBy} />
      <Routes>
        <Route path="stay/:id" element={<StayDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
