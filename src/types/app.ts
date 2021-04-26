export interface Recipe {
  contentId: number
  title: string
  urlPartial: string
  isFavourited: boolean
  imageList: Image
  tags: Tag[]
  contentType?: number
}

export interface Image {
  [key: string]: {
    url: string
  }
}

export interface Tag {
  id: number
  catId: number
  name: string
}
