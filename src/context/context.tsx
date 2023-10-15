import React, { createContext, useContext, useState } from 'react';
import {IAPIResponse} from '../types/API';

const SpotifyContext = createContext();

export const UserProvider = ({ children }) => {
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
