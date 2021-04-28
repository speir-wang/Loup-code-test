export interface Recipe {
  contentId: number
  title: string
  urlPartial: string
  isFavourited: boolean
  imageList: ImageList
  tags: Tag[]
  contentType?: number
  authors: string[]
}

export type ImageList = {
  [key in ImageSrcSet]: {
    url: string
  }
}

export type ImageSrcSet =
  | 'landscape32small1x'
  | 'landscape32small2x'
  | 'landscape32small3x'
  | 'landscape32medium1x'
  | 'landscape32medium2x'
  | 'landscape32medium3x'
  | 'landscapemobile1x'
  | 'landscapemobile2x'
  | 'landscapemobile3x'
  | 'landscapewidedesktop1x'
  | 'landscapewidedesktop2x'
  | 'landscapewidedesktop3x'

export interface Tag {
  id: number
  catId: number
  name: string
}
