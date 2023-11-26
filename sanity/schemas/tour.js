// schemas/package.js

const tour = {
  name: 'package',
  title: 'Tour Package',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration (days)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tour_location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tour_type',
      title: 'Type of Tour',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'upcoming_dates',
      title: 'Upcoming Dates',
      type: 'array',
      of: [
        {
          name: 'date',
          type: 'date',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'departure',
      title: 'Departure',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'departure_time',
      title: 'Departure Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'return_time',
      title: 'Return Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dress_code',
      title: 'Dress Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'group',
      title: 'People Going',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery_text',
      title: 'Gallery Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location_summary',
      title: 'Location Summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location_details',
      title: 'Location Details',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'landscabe',
      title: 'Landscabe',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location_image',
      title: 'Location Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tour_plan',
      title: 'Tour Plan',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'summary',
              title: 'Summary',
              type: 'text',
            },
            {
              name: 'details',
              title: 'Details',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'thumbnail',
    },
  },
};


export default tour