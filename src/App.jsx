import './assets/scss/global.scss'
import DestinationList from './cmps/DestinationList';
import { useStayStore } from './stores/stay-context';

const App = () => {
  const { stays } = useStayStore();
  return (
    <DestinationList stayList={stays} />
  )
}

export default App