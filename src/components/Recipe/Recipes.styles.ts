import styled from 'styled-components'

export const RecipeList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  padding: 0 16px;
  margin-bottom: 32px;
`
