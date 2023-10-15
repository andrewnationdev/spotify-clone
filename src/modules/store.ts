import create from 'zustand';
import {IAPIResponse} from '../types/API';

interface IStoreActions {
  updateData: (newData: IAPIResponse) => void;
}

const useSpotifyStore = create<{data: IAPIResponse} & IStoreActions>((set) => ({
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
  updateData: (newData) => {
    set((data: IAPIResponse) => ({ data: { ...data.data, data: newData } }));
  },
}));

export default useSpotifyStore;
