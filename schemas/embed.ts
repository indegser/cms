export default {
  name: 'embed',
  type: 'object',
  title: '임베드',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      title: 'url',
    },
  },
}
