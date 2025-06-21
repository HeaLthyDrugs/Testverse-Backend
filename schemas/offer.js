export default {
  name: 'offer',
  title: 'Offer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Offer Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this offer',
      initialValue: true
    },
    {
      name: 'content',
      title: 'Offer Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' }
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'shareButtonText',
      title: 'Share Button Text',
      type: 'string',
      initialValue: 'Share App',
      validation: Rule => Rule.required().max(30)
    },
    {
      name: 'shareMessage',
      title: 'Share Message',
      type: 'text',
      description: 'Message to share when user clicks the share button',
      initialValue: 'Check out this amazing app! Download now and start learning.',
      validation: Rule => Rule.required().max(280)
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Higher number = higher priority (will show first)',
      initialValue: 1,
      validation: Rule => Rule.required().min(1).max(10)
    }
  ],
  orderings: [
    {
      title: 'Priority (High to Low)',
      name: 'priorityDesc',
      by: [
        { field: 'priority', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
      priority: 'priority'
    },
    prepare(selection) {
      const { title, isActive, priority } = selection;
      return {
        title: title,
        subtitle: `${isActive ? 'Active' : 'Inactive'} | Priority: ${priority}`
      };
    }
  }
};
