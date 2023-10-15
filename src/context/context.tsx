import React, { createContext, useContext, useState } from 'react';
import {IAPIResponse} from '../types/API';

export const SpotifyContext = createContext<{
    IAPIResponse;
    updateData: (x: any) => void 
} | {
    updateData: (x: any) => void
}>({});

export const SpotifyProvider = ({ children }) => {
  const [data, setData] = useState<IAPIResponse | {}>({});

  const updateData = (updatedData) => {
    setData((prevUser) => ({
      ...prevData,
      ...updatedData,
    }));
  };

  return (
    <SpotifyContext.Provider value={{ user, updateUserData }}>
      {children}
    </SpotifyContext.Provider>
  );
};
