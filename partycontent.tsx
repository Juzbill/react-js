import React, { createContext, useContext, useState } from 'react';

const PartyContext = createContext();

export const usePartyContext = () => {
  return useContext(PartyContext);
};

export const PartyProvider = ({ children }) => {
  const [isPartyGroupEnabled, setIsPartyGroupEnabled] = useState(false);

  const togglePartyGroup = () => {
    setIsPartyGroupEnabled((prev) => !prev);
  };

  return (
    <PartyContext.Provider value={{ isPartyGroupEnabled, togglePartyGroup }}>
      {children}
    </PartyContext.Provider>
  );
};
