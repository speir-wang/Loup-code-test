import * as React from 'react'
import { Recipe } from './Recipe'
import * as Styles from './Recipes.styles'
import type { Recipe as RecipeType } from '../../types/app'

export const RecipeList = ({ recipes }: { recipes: RecipeType[] }) => {
  return (
    <Styles.RecipeList>
      {recipes.map(recipe => (
        <Recipe key={recipe.contentId} recipe={recipe} />
      ))}
    </Styles.RecipeList>
  )
}
