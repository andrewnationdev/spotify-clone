import React, { createContext, useContext, useState } from 'react';
import { IAPIResponse } from '../types/API';

type TContext = {
    data: IAPIResponse | {} | undefined;
    updateData: (arg: any) => void;
}

export const SpotifyContext = createContext<TContext>({
    data: {
        name: '',
        avatar: '',
        playlists: [],
        currentlyPlaying: {
            title: '',
            singer: '',
            cover: '',
            isFavorite: false,
        },
        sections: [],
    },
    updateData: () => { }
});

export const SpotifyProvider = ({ children }: {children: React.ReactNode}) => {
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
