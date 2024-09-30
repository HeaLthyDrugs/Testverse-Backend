import { defineType } from 'sanity';

export default defineType({
  name: 'question',
  title: 'Question',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'correctOption',
      title: 'Correct Option',
      type: 'number',
      validation: rule => rule.required().min(1).max(4), // Assuming options are 1, 2, 3, 4
    },
    {
      name: 'explanation',
      title: 'Explanation',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
