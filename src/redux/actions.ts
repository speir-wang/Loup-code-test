import { LOAD_RECIPES } from './actionTypes'

interface LoadRecipes {
  type: typeof LOAD_RECIPES
}

export const loadRecipes = () => ({
  type: LOAD_RECIPES
})

export type Actions = LoadRecipes
