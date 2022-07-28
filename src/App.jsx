import './assets/scss/global.scss';
import DestinationList from './cmps/DestinationList';
import MainHeader from './cmps/MainHeader';
import {useStayStore} from './stores/stay-context';

const App = () => {
  const {stays} = useStayStore();
  return (
    <>
      <MainHeader />
      <DestinationList stayList={stays} />
    </>
  );
};

export default App;
