import create from 'zustand';
import {IAPIResponse} from '../types/API';

interface IStoreActions {
  updateData: (newData: IAPIResponse) => void;
}

const useSpotifyStore = create<{state: {data: IAPIResponse}} & IStoreActions>((set) => ({
  state: {
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
  },
  updateData: (newData) => {
    set((state: IAPIResponse) => ({ state: { ...state.state, data: newData } }));
  },
}));

export default useSpotifyStore;
