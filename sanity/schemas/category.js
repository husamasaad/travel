// schemas/type.js

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name (keyword)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
