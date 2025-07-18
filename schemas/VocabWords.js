import { defineType } from 'sanity';

export default defineType({
  name: 'vocabWords',
  title: 'Vocabulary Words',
  type: 'document',
  fields: [
    {
      name: 'word',
      title: 'Word',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'wordID',
      title: 'Word ID',
      type: 'string',
      readOnly: false, // Allow manual editing
      hidden: false,
      description: 'Unique ID for the word. Leave blank to auto-generate, or enter a custom value.',
      initialValue: () => {
        return crypto.randomUUID ? crypto.randomUUID() : (typeof uuid === 'function' ? uuid() : '');
      },
      validation: rule => rule.required(),
    },
    {
      name: 'meaning',
      title: 'Meaning',
      type: 'array',
      of: [{ type: 'block' }],
      validation: rule => rule.required(),
    },
    {
      name: 'example',
      title: 'Example',
      type: 'array',
      of: [{ type: 'block' }],
      validation: rule => rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    // Reference fields for flow tracking
    {
      name: 'vocabDay',
      title: 'Vocabulary Day',
      type: 'reference',
      to: [{ type: 'vocabDays' }],
    //   validation: rule => rule.required(),
      description: 'Select the vocabulary day this word belongs to',
    },
    {
      name: 'vocabMonth',
      title: 'Vocabulary Month',
      type: 'reference',
      to: [{ type: 'vocabMonth' }],
    //   validation: rule => rule.required(),
      description: 'Select the vocabulary month this word belongs to',
    },
    {
      name: 'vocabContent',
      title: 'Vocabulary Content',
      type: 'reference',
      to: [{ type: 'vocabContent' }],
    //   validation: rule => rule.required(),
      description: 'Select the vocabulary content this word belongs to',
    },
    {
      name: 'studySection',
      title: 'Study Section',
      type: 'reference',
      to: [{ type: 'studySection' }],
    //   validation: rule => rule.required(),
      description: 'Select the study section this word belongs to',
    },
  ],
});