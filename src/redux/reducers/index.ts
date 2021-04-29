import { combineReducers } from '@reduxjs/toolkit'
import { recipesReducer } from './recipes'

const rootReducer = combineReducers({ recipes: recipesReducer })
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
