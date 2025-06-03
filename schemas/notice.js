// Schema for the notice section that appears on the Home screen
export default {
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Notice Title',
      type: 'string',
      description: 'A title for internal reference (not displayed to users)',
      validation: Rule => Rule.required()
    },
    {
      name: 'noticeText',
      title: 'Notice Text',
      type: 'text',
      description: 'The text content of the notice that will be displayed to users',
      validation: Rule => Rule.required()
    },
    {
      name: 'isVisible',
      title: 'Show Notice',
      type: 'boolean',
      description: 'Toggle to show or hide the notice section',
      initialValue: true
    },
    {
      name: 'knowMoreLink',
      title: 'Know More Link',
      type: 'url',
      description: 'URL that will open when user taps on "Know More" button',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'knowMoreText',
      title: 'Know More Button Text',
      type: 'string',
      description: 'Text to display on the Know More button',
      initialValue: 'Know More'
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Background color of the notice (use hex code e.g. #f8f8f8)',
      initialValue: '#f8f8f8'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Color of the notice text (use hex code e.g. #424242)',
      initialValue: '#424242'
    },
    {
      name: 'buttonColor',
      title: 'Button Text Color',
      type: 'string',
      description: 'Color of the Know More button text (use hex code e.g. #8103C9)',
      initialValue: '#8103C9'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'noticeText',
      isVisible: 'isVisible'
    },
    prepare({ title, subtitle, isVisible }) {
      return {
        title,
        subtitle: subtitle?.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle,
        media: isVisible ? 'show' : 'hide'
      };
    }
  }
};