import { create } from 'zustand'

const useSpotifyStore = create((set) => ({
  bears: 0,
  updateData: () => set((data: IAPIResponse) => ((s) => ({
    ...s,
    data
  }))
}))