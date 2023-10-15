import React, { createContext, useContext, useState } from 'react';
import { IAPIResponse } from '../types/API';

type TContext = {
    data: IAPIResponse | undefined;
    updateData: (updatedData: IAPIResponse) => void;
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
    updateData: (updateData: IAPIResponse) => {}
});


const useSpotifyContext = () => {
    return useContext(SpotifyContext);
}

export const SpotifyProvider = ({ children }: {children: React.ReactNode}) => {
    const [data, setData] = useState<IAPIResponse>({
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
    });

    const updateData = (updatedData: IAPIResponse) => {
        setData((prevData) => ({
            ...prevData,
            ...updatedData,
        }));

        console.log('atualizou', updatedData)
    };

    return (
        <SpotifyContext.Provider value={{ data, updateData }}>
            {children}
        </SpotifyContext.Provider>
    );
};
