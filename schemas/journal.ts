import {SchemaTypeDefinition} from 'sanity'

export const journal: SchemaTypeDefinition = {
  title: '저널',
  name: 'journal',
  type: 'document',
  fields: [
    {
      title: '제목',
      name: 'title',
      type: 'string',
    },
    {
      title: '책',
      name: 'book',
      type: 'reference',
      to: [{type: 'book'}],
    },
    {
      title: '내용',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}, {type: 'embed'}],
    },
  ],
}
