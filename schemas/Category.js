import { defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'fullForm',
      title: 'Full Form',
      type: 'string',
    },
    {
      name: 'numberOfTests',
      title: 'Number of Tests',
      type: 'number',
      validation: rule => rule.integer(),
    },
    {
      name: 'numberOfFreeTests',
      title: 'Number of Free Tests',
      type: 'number',
      validation: rule => rule.integer(),
    },
    {
      name: 'numberOfTotalQuestions',
      title: 'Total Number of Questions',
      type: 'number',
      validation: rule => rule.integer(),
    },
    {
      name: 'tests',
      title: 'Tests',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'test' }] }],
    },
  ],
});
