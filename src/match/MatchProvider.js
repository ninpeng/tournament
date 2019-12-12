import React, { createContext, useContext, useState } from 'react';

const MatchContext = createContext();

// 마우스 오버 시 우승자를 표시해주기 위한 context provider
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