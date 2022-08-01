import { createContext, useContext } from 'react';
import stayStore from './stay-store';

const store = {
  app: stayStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export default store;
