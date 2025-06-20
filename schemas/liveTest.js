import { defineType } from 'sanity';

export default defineType({
  name: 'liveTest',
  title: 'Live Test',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Test Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'testSet',
      title: 'Test Set',
      type: 'reference',
      to: [{ type: 'set' }],
      validation: (rule) => rule.required(),
    },
    {
      name: 'startTime',
      title: 'Test Start Time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    },
    {
      name: 'endTime',
      title: 'Test End Time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Test Description',
      type: 'text',
      description: 'Brief description about the test (optional)',
    },
    {
      name: 'instructions',
      title: 'Test Instructions',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Specific instructions for this live test (optional)',
    }
  ],  preview: {
    select: {
      title: 'title',
      startTime: 'startTime',
      endTime: 'endTime'
    },
    prepare(selection) {
      const { title, startTime, endTime } = selection;
      const start = new Date(startTime);
      const end = new Date(endTime);
      const now = new Date();
      
      let status = 'UPCOMING';
      if (now >= start && now <= end) {
        status = 'LIVE';
      } else if (now > end) {
        status = 'COMPLETED';
      }
      
      return {
        title: title,
        subtitle: `${status} - Starts: ${start.toLocaleString()}`
      };
    }
  }
});