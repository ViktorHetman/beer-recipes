import { create } from "zustand";

export const useBeers = create((set) => ({
  beers: [],
  loading: false,
  error: null,
  fetchBeers: async (url) => {
    set({ loading: true });

    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error("Failed to fetch! Try again");
      set({ beers: await res.json(), error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
