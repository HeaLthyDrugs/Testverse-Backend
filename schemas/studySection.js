import { defineType } from 'sanity';

export default defineType({
  name: 'studySection',
  title: 'Study Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Section Name',
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
      name: 'vocabContents',
      title: 'Vocabulary Contents',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'vocabContent' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Vocabulary Section',
        media,
      };
    },
  },
});
