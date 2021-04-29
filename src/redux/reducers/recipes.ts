import type { Actions } from '../actions'
import { LOAD_RECIPES } from '../actionTypes'
import data from '../../mock/recipes.json'
import type { Recipe } from '../../types/app'

export type RecipesState = Recipe[]

const initialState: RecipesState = []

export function recipesReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case LOAD_RECIPES: {
      const recipes = data.contents
      return recipes
    }
    default:
      return state
  }
}
