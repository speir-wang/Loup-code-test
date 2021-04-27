import * as React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { RecipeList } from './components/Recipe'
import { useDispatch } from 'react-redux'
import { loadRecipes } from './redux/actions'

const AppWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f4f4f4;
`

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(loadRecipes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <AppWrapper>
        <Redirect to="/recipes" />
        <Route path="/recipes">
          <RecipeList />
        </Route>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
