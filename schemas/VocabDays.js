import { defineType } from 'sanity';

export default defineType({
  name: 'vocabDays',
  title: 'Vocabulary Days',
  type: 'document',
  fields: [
    {
      name: 'dayName',
      title: 'Day Name',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'vocabMonth',
      title: 'Vocabulary Month',
      type: 'reference',
      to: [{ type: 'vocabMonth' }],
    //   validation: rule => rule.required(),
      description: 'Select the vocabulary month this day belongs to',
    },
    {
      name: 'words',
      title: 'Words',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'vocabWords' }] }],
    },
  ],
});