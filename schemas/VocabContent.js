import { defineType } from 'sanity';
import { v4 as uuidv4 } from 'uuid';

export default defineType({
  name: 'vocabContent',
  title: 'Vocabulary Content',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Content Name',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'studySection',
      title: 'Study Section',
      type: 'reference',
      to: [{ type: 'studySection' }],
    //   validation: rule => rule.required(),
    },
    {
      name: 'months',
      title: 'Months',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'vocabMonth' }] }],
    },
  ],
});
