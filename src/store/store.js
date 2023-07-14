import { create } from "zustand";
import { fetchBeers } from "../services/getRecipes";

export const useBeers = create((set) => ({
  beers: [],
  choosed: false,
  selectedRecipes: [],
  currentPage: 1,

  loadRecipes: async (url) => {
    const recipes = await fetchBeers(url);
    set((state) => ({ beers: [...state.beers, ...recipes] }));
    set((state) => ({
      beers: state.beers.map((beer) => ({ ...beer, choosed: state.choosed })),
    }));
  },
  deleteRecipeSelection: () => {
    set((state) => ({
      beers: state.beers.filter(
        (recipe) => !state.selectedRecipes.includes(recipe.id)
      ),
      selectedRecipes: [],
    }));
  },
  toggleRecipeSelection: (recipeId, choosed) => {
    set((state) => {
      const selectedRecipes = state.selectedRecipes.includes(recipeId)
        ? state.selectedRecipes.filter((id) => id !== recipeId)
        : [...state.selectedRecipes, recipeId];
      return { selectedRecipes };
    });
    set((state) => ({
      beers: state.beers.map((beer) => {
        return beer.id === recipeId
          ? { ...beer, choosed: !choosed }
          : { ...beer };
      }),
    }));
  },
  removeFirstFiveRecipes: () => {
    set((state) => ({
      beers: state.beers.slice(5),
    }));
  },
}));
