import { defineType } from 'sanity';
import { v4 as uuidv4 } from 'uuid';

export default defineType({
  name: 'set',
  title: 'Set',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Paper Name',
      type: 'string',
      validation: (rule) => rule.required(),
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
      name: 'setType',
      title: 'Set Type',
      type: 'string',
      options: {
        list: [
          { title: 'Free', value: 'free' },
          { title: 'Paid', value: 'paid' },
        ],
        layout: 'radio',
      },
      validation: rule => rule.required(),
    },
    {
      name: 'numberOfMarks',
      title: 'Number of Marks',
      type: 'number',
      validation: (rule) => rule.required().integer(),
    },
    {
      name: 'numberOfMinutes',
      title: 'Number of Minutes',
      type: 'number',
      validation: (rule) => rule.required().integer(),
    },
    {
      name: 'numberOfQuestions',
      title: 'Number of Questions',
      type: 'number',
      validation: (rule) => rule.required().integer(),
    },
    {
      name: 'markPerQuestion',
      title: 'Mark Per Question',
      type: 'number',
      initialValue: () => 2,
    },
    {
      name: 'negativeMarking',
      title: 'Negative Marking',
      type: 'number',
      validation: (rule) => rule.required().min(0),
      initialValue: () => 0,
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'question' }],
    },
  ],
});
