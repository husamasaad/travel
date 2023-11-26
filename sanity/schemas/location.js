// schemas/location.js

export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Location Name',
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
