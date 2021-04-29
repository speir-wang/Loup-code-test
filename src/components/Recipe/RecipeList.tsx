import * as React from 'react'
import { useSelector } from 'react-redux'
import { Recipe } from './Recipe'
import * as Styles from './Recipes.styles'
import { getRecipes } from '../../redux/selectors'

export const RecipeList = () => {
  const recipes = useSelector(getRecipes)

  return (
    <Styles.RecipeList>
      {recipes.map(recipe => (
        <Recipe key={recipe.contentId} recipe={recipe} />
      ))}
    </Styles.RecipeList>
  )
}
