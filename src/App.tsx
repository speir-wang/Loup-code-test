import * as React from 'react'
import styled from 'styled-components'
import { Recipe } from './components/Recipe'
import { RecipeList } from './components/Recipe/Recipes.styles'
import type { Recipe as RecipeType } from './types/app'

const AppWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f4f4f4;
`

interface Props {
  data: {
    contents: RecipeType[]
  }
}

function App({ data }: Props) {
  const [recipes] = React.useState<RecipeType[]>(data.contents)

  return (
    <AppWrapper>
      <RecipeList>
        {recipes.map(recipe => (
          <Recipe key={recipe.contentId} recipe={recipe} />
        ))}
      </RecipeList>
    </AppWrapper>
  )
}

export default App
