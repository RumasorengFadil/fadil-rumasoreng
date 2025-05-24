// src/stores/intersectionStore.ts
import { create } from 'zustand';

interface IntersectionStore {
  refElement: HTMLDivElement | null;
  isIntersecting: boolean;
  setRefElement: (el: HTMLDivElement | null) => void;
  setIsIntersecting: (val: boolean) => void;
}

const useIntersectionStore = create<IntersectionStore>((set) => ({
  refElement: null,
  isIntersecting: false,
  setRefElement: (el) => set({ refElement: el }),
  setIsIntersecting: (val) => set({ isIntersecting: val }),
}));

export default useIntersectionStore;
