import { createContext, useContext } from 'react';
import { createStayStore } from './stay-store';

const StayContext = createContext(null);

export const StayProvider = ({ children }) => {
    const stayStore = createStayStore();

    return <StayContext.Provider value={stayStore}>{children}</StayContext.Provider>
}

export const useStayStore = () => useContext(StayContext);