import { defineType } from 'sanity';

export default defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Test name',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'testType',
      title: 'Test Type',
      type: 'string',
      options: {
        list: [
          { title: 'PYQ', value: 'pyq' },
          { title: 'Mock Test', value: 'mockTest' },
        ],
        layout: 'radio',
      },
      validation: rule => rule.required(),
    },
    {
      name: 'types',
      title: 'Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'typeName',
              title: 'Type Name',
              type: 'string',
              validation: rule => rule.required(),
            },
            {
              name: 'uniqueId',
              title: 'Unique ID',
              type: 'string',
              readOnly: false,
              initialValue: () => uuidv4(),
              validation: (rule) => rule.required(),
            },
            {
              name: 'tier',
              title: 'Tier',
              type: 'string',
              options: {
                list: [
                  { title: 'Tier 1', value: 'tier1' },
                  { title: 'Tier 2', value: 'tier2' },
                ],
              },
            },
            {
              name: 'sets',
              title: 'Sets',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'set' }] }],
            },
          ],
        },
      ],
    },
  ],
});
