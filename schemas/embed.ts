export default {
  name: 'embed',
  type: 'object',
  title: 'Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
}
