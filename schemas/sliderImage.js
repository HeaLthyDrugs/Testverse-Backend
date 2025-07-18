// schemas/sliderImage.js
export default {
    name: 'sliderImage',
    type: 'document',
    title: 'Slider Image',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Enables the hotspot feature for better image cropping
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'linkType',
        type: 'string',
        title: 'Link Type',
        description: 'Choose whether to use a predefined screen or a custom link',
        validation: Rule => Rule.required(),
        options: {
          list: [
            { title: 'To Screen', value: 'predefined' },
            { title: 'To Custom Link', value: 'custom' },
          ],
        },
        initialValue: 'predefined',
      },
      {
        name: 'targetScreen',
        type: 'string',
        title: 'Target Screen',
        description: 'The screen to navigate to when the image is pressed',
        validation: Rule => Rule.required(),
        options: {
          list: [
            { title: 'About', value: 'Second About' },
            { title: 'Subscription', value: 'Buy Subscription' },
            { title: 'Study Material', value: 'Study Material' },
            { title: 'Live Test', value: 'Live' },
            { title: 'App Details', value: 'App Details' },
            { title: 'Contact Us', value: 'Contact Us' },
            { title: 'Exam Notification', value: 'Exam notification"' },
            { title: 'Offers', value: 'Offers' },
            { title: 'Refer & Earn', value: 'Refer' },
            
          ],
        },
        hidden: ({ document }) => document?.linkType !== 'predefined',
      },
      {
        name: 'customLink',
        type: 'url',
        title: 'Custom Link',
        description: 'Enter a custom URL to navigate to when the image is pressed',
        validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
        hidden: ({ document }) => document?.linkType !== 'custom',
      },
    ],
  };
  