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
        name: 'targetScreen',
        type: 'string',
        title: 'Target Screen',
        description: 'The screen to navigate to when the image is pressed',
        validation: Rule => Rule.required(),
        options: {
          list: [
            { title: 'About', value: 'About' },
            { title: 'Subscription', value: 'Buy Subscription' },
            { title: 'Study Material', value: 'Study Material' },
          ],
        },
      },
    ],
  };
  