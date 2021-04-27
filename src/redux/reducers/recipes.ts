import type { Actions } from '../actions'
import { LOAD_RECIPES } from '../actionTypes'
import data from '../../mock/recipes.json'
import type { Recipe } from '../../types/app'

export interface AppState {
  recipes?: Recipe[]
}

const initialState: AppState = {
  recipes: []
}

export default function reducer(
  state = initialState,
  action: Actions
): AppState {
  switch (action.type) {
    case LOAD_RECIPES: {
      return {
        ...state,
        recipes: data.contents
      }
    }
    default:
      return state
  }
}
