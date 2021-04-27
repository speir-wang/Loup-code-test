import type { AppState } from './reducers/recipes'

export const getRecipes = (store: AppState) => store.recipes
