import * as React from 'react'
import type { Recipe as RecipeType } from '../../types/app'
import * as Styles from './Recipes.styles'

interface Props {
  recipe: RecipeType
}

export function Recipe({ recipe }: Props) {
  const mediumImageUrl = recipe.imageList.landscape32medium1x.url

  return (
    <Styles.Wrapper>
      <Styles.Image src={mediumImageUrl} alt={recipe.title} />
      <Styles.Title>{recipe.title}</Styles.Title>
    </Styles.Wrapper>
  )
}
