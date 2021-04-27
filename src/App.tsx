import * as React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import type { Recipe as RecipeType } from './types/app'
import { RecipeList } from './components/Recipe'

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
    <BrowserRouter>
      <AppWrapper>
        <Redirect to="/recipes" />
        <Route path="/recipes">
          <RecipeList recipes={recipes} />
        </Route>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
