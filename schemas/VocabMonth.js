import { defineType } from 'sanity';

export default defineType({
  name: 'vocabMonth',
  title: 'Vocabulary Month',
  type: 'document',
  fields: [
    {
      name: 'monthName',
      title: 'Month Name',
      type: 'string',
      validation: rule => rule.required(),
      options: {
        list: [
          { title: 'January', value: 'january' },
          { title: 'February', value: 'february' },
          { title: 'March', value: 'march' },
          { title: 'April', value: 'april' },
          { title: 'May', value: 'may' },
          { title: 'June', value: 'june' },
          { title: 'July', value: 'july' },
          { title: 'August', value: 'august' },
          { title: 'September', value: 'september' },
          { title: 'October', value: 'october' },
          { title: 'November', value: 'november' },
          { title: 'December', value: 'december' },
        ],
      },
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: rule => rule.required().min(2020),
      initialValue: () => new Date().getFullYear(),
    },
    {
      name: 'vocabContent',
      title: 'Vocabulary Content',
      type: 'reference',
      to: [{ type: 'vocabContent' }],
    //   validation: rule => rule.required(),
      description: 'Select the vocabulary content this month belongs to',
    },
    {
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'vocabDays' }] }],
    },
  ],
});