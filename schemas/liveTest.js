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
    },
    {
      name: 'status',
      title: 'Test Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Live', value: 'live' },
          { title: 'Completed', value: 'completed' }
        ]
      },
      initialValue: () => 'upcoming',
      readOnly: true,
      description: 'Automatically calculated based on start and end times',
    }  ],
  
  // Helper function to calculate current status
  functions: {
    calculateStatus: (startTime, endTime) => {
      const now = new Date();
      const start = new Date(startTime);
      const end = new Date(endTime);
      
      if (now < start) return 'upcoming';
      if (now >= start && now <= end) return 'live';
      return 'completed';
    }
  },
  
  preview: {
    select: {
      title: 'title',
      startTime: 'startTime',
      endTime: 'endTime',
      status: 'status'
    },
    prepare(selection) {
      const { title, startTime, endTime, status } = selection;
      const start = new Date(startTime);
      const end = new Date(endTime);
      const now = new Date();
      
      // Calculate current status
      let currentStatus = 'upcoming';
      if (now >= start && now <= end) {
        currentStatus = 'live';
      } else if (now > end) {
        currentStatus = 'completed';
      }
      
      // Display status with color coding
      const statusDisplay = currentStatus.toUpperCase();
      const statusEmoji = {
        upcoming: '🕐',
        live: '🔴',
        completed: '✅'
      };
        return {
        title: title,
        subtitle: `${statusEmoji[currentStatus]} ${statusDisplay} - Starts: ${start.toLocaleString()}`
      };
    }
  }
});