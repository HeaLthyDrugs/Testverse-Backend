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
            { title: 'About', value: 'Second About' },
            { title: 'Subscription', value: 'Buy Subscription' },
            { title: 'Study Material', value: 'Study Material' },
            { title: 'Live Test', value: 'Live' },
            { title: 'App Details', value: 'App Details' },
            { title: 'Contact Us', value: 'Contact Us' },
            { title: 'Exam Notification', value: 'Exam notification"' },
            { title: 'Offers', value: 'Offers' },
          ],
        },
      },
    ],
  };
  