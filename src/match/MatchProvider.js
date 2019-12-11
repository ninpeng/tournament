import React, { createContext, useContext, useState } from 'react';

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [isHover, setHover] = useState(false);

  return (
    <MatchContext.Provider value={[isHover, setHover]}>
      {children}
    </MatchContext.Provider>
  )
}

export const useChangeHover = () => {
  return useContext(MatchContext);
}