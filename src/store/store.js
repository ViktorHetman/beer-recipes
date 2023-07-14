import { create } from "zustand";
import { fetchBeers } from "../services/getRecipes";

export const useBeers = create((set) => ({
  beers: [],
  selectedRecipes: [],
  currentPage: 1,

  loadRecipes: async (url) => {
    const recipes = await fetchBeers(url);
    set((state) => ({ beers: [...state.beers, ...recipes] }));
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
  removeFirstFiveRecipes: () => {
    set((state) => ({
      beers: state.beers.slice(5),
    }));
  },
}));
