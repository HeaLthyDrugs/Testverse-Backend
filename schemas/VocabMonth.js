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