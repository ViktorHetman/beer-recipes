import { create } from "zustand";

export const useBeers = create((set) => ({
  beers: [],
  selectedRecipes: [],
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
  deleteRecipeSelection: () => {
    set((state) => ({
      beers: state.beers.filter(
        (recipe) => !state.selectedRecipes.includes(recipe.id)
      ),
      selectedRecipes: [],
    }));
  },
  toggleRecipeSelection: (recipeId) => {
    set((state) => {
      const selectedRecipes = state.selectedRecipes.includes(recipeId)
        ? state.selectedRecipes.filter((id) => id !== recipeId)
        : [...state.selectedRecipes, recipeId];
      return { selectedRecipes };
    });
  },
}));
