import React, { createContext, useContext, useState } from 'react';
import {IAPIResponse} from '../types/API';

type TContext = {
    data: IAPIResponse | {} | undefined;
    updateData: (arg: any) => void;
}

export const SpotifyContext = createContext<TContext>({
    data: {},
    updateData: () => {}
});

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
