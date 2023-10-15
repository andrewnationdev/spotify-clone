import { create } from 'zustand'

const useSpotifyStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: {
    bears: number
  }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))