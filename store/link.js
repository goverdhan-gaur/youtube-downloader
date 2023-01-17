import {create} from 'zustand';

// define the store
export const useStore = create(set => ({
  votes: 2,
}));