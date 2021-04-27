import React from 'react'
import { render, screen } from '@testing-library/react'
import { Recipe } from '../Recipe'

test('renders learn react link', async () => {
  const recipe = {
    contentId: 5333,
    title: 'ANZAC Smoothie',
    urlPartial: 'anzac-smoothie',
    isFavourited: false,
    imageList: {
      landscape32small1x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscape32small1x-loup-cen-anzacsmoothie-32l-v2.jpg'
      },
      landscape32small2x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscape32small2x-loup-cen-anzacsmoothie-32l-v2.jpg'
      },
      landscape32small3x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscape32small3x-loup-cen-anzacsmoothie-32l-v2.jpg'
      },
      landscape32medium1x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscape32medium1x-loup-cen-anzacsmoothie-32l-v2.jpg'
      },
      landscape32medium2x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscape32medium2x-loup-cen-anzacsmoothie-32l-v2.jpg'
      },
      landscape32medium3x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscape32medium3x-loup-cen-anzacsmoothie-32l-v2.jpg'
      },
      landscapemobile1x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscapemobile1x-loup-cen-anzacsmoothie-43l-v2.jpg'
      },
      landscapemobile2x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscapemobile2x-loup-cen-anzacsmoothie-43l-v2.jpg'
      },
      landscapemobile3x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscapemobile3x-loup-cen-anzacsmoothie-43l-v2.jpg'
      },
      landscapewidedesktop1x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscapewidedesktop1x-loup-cen-anzacsmoothie-169l-v2.jpg'
      },
      landscapewidedesktop2x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscapewidedesktop2x-loup-cen-anzacsmoothie-169l-v2.jpg'
      },
      landscapewidedesktop3x: {
        url:
          'https://cdn.centr.com/content/6000/5333/images/landscapewidedesktop3x-loup-cen-anzacsmoothie-169l-v2.jpg'
      }
    },
    tags: [
      {
        id: 57,
        catId: 3,
        name: 'Budget'
      }
    ],
    authors: []
  }
  render(<Recipe recipe={recipe} />)
  const image = await screen.findByRole('img')

  expect(screen.getByText(/ANZAC Smoothie/i)).toBeInTheDocument()
  expect(image).toBeInTheDocument()
  expect(image.getAttribute('src')).toEqual(
    recipe.imageList.landscape32medium1x.url
  )
})
