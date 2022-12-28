import {defineField} from 'sanity'

export default {
  name: 'embed',
  type: 'object',
  title: '임베드',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: '캡션',
    }),
  ],
  preview: {
    select: {
      title: 'url',
      subtitle: 'caption',
    },
  },
}
