export default {
    name: 'appDetails',
    title: 'App Details',
    type: 'document',
    fields: [
      {
        name: 'appName',
        title: 'App Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true // Enables UI for selecting focal point
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'features',
        title: 'Key Features',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Rich text content for features'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'appName',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime'
      }
    ]
  }